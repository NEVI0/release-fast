import { Prisma } from '../../../generated/prisma';

// Error types for better categorization
export type ErrorType =
  | 'VALIDATION_ERROR'
  | 'DATABASE_ERROR'
  | 'NETWORK_ERROR'
  | 'AUTHENTICATION_ERROR'
  | 'AUTHORIZATION_ERROR'
  | 'NOT_FOUND_ERROR'
  | 'RATE_LIMIT_ERROR'
  | 'INTERNAL_SERVER_ERROR'
  | 'UNKNOWN_ERROR';

// Error interface for consistent error handling
export interface AppError {
  type: ErrorType;
  message: string;
  code?: string;
  details?: any;
  timestamp: Date;
  originalError?: any;
}

// Prisma error codes mapping
const PRISMA_ERROR_CODES = {
  P2000: 'VALIDATION_ERROR',
  P2001: 'NOT_FOUND_ERROR',
  P2002: 'VALIDATION_ERROR', // Unique constraint violation
  P2003: 'VALIDATION_ERROR', // Foreign key constraint violation
  P2004: 'DATABASE_ERROR',
  P2005: 'VALIDATION_ERROR',
  P2006: 'VALIDATION_ERROR',
  P2007: 'VALIDATION_ERROR',
  P2008: 'DATABASE_ERROR',
  P2009: 'DATABASE_ERROR',
  P2010: 'DATABASE_ERROR',
  P2011: 'VALIDATION_ERROR',
  P2012: 'VALIDATION_ERROR',
  P2013: 'VALIDATION_ERROR',
  P2014: 'VALIDATION_ERROR',
  P2015: 'NOT_FOUND_ERROR',
  P2016: 'DATABASE_ERROR',
  P2017: 'DATABASE_ERROR',
  P2018: 'NOT_FOUND_ERROR',
  P2019: 'VALIDATION_ERROR',
  P2020: 'VALIDATION_ERROR',
  P2021: 'DATABASE_ERROR',
  P2022: 'DATABASE_ERROR',
  P2023: 'DATABASE_ERROR',
  P2024: 'DATABASE_ERROR',
  P2025: 'NOT_FOUND_ERROR',
  P2026: 'DATABASE_ERROR',
  P2027: 'DATABASE_ERROR',
} as const;

/**
 * Handles various types of errors and returns a standardized error object
 * @param error - The error to handle
 * @param context - Optional context information about where the error occurred
 * @returns AppError object with standardized error information
 */
export default function handleError(error: any, context?: string): AppError {
  const timestamp = new Date();

  let type: ErrorType = 'UNKNOWN_ERROR';
  let message = 'An unexpected error occurred';
  let code: string | undefined;
  let details: any = undefined;

  // Handle Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    type =
      (PRISMA_ERROR_CODES[
        error.code as keyof typeof PRISMA_ERROR_CODES
      ] as ErrorType) || 'DATABASE_ERROR';
    code = error.code;
    message = getPrismaErrorMessage(error);
    details = {
      meta: error.meta,
      clientVersion: error.clientVersion,
    };
  } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    type = 'DATABASE_ERROR';
    message = 'An unknown database error occurred';
    details = {
      clientVersion: error.clientVersion,
    };
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    type = 'VALIDATION_ERROR';
    message = 'Data validation failed';
    details = {
      clientVersion: error.clientVersion,
    };
  } else if (error instanceof Prisma.PrismaClientInitializationError) {
    type = 'DATABASE_ERROR';
    message = 'Database connection failed';
    details = {
      clientVersion: error.clientVersion,
    };
  }

  // Handle network errors
  else if (error instanceof TypeError && error.message.includes('fetch')) {
    type = 'NETWORK_ERROR';
    message = 'Network request failed';
  } else if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
    type = 'NETWORK_ERROR';
    message = 'Unable to connect to the server';
    code = error.code;
  }

  // Handle HTTP errors
  else if (error.status) {
    switch (error.status) {
      case 400:
        type = 'VALIDATION_ERROR';
        message = error.message || 'Bad request';
        break;
      case 401:
        type = 'AUTHENTICATION_ERROR';
        message = error.message || 'Authentication required';
        break;
      case 403:
        type = 'AUTHORIZATION_ERROR';
        message = error.message || 'Access denied';
        break;
      case 404:
        type = 'NOT_FOUND_ERROR';
        message = error.message || 'Resource not found';
        break;
      case 429:
        type = 'RATE_LIMIT_ERROR';
        message = error.message || 'Too many requests';
        break;
      case 500:
        type = 'INTERNAL_SERVER_ERROR';
        message = error.message || 'Internal server error';
        break;
      default:
        type = 'UNKNOWN_ERROR';
        message = error.message || 'An error occurred';
    }
    code = error.status.toString();
  }

  // Handle validation errors (Zod, Joi, etc.)
  else if (error.name === 'ZodError' || error.issues) {
    type = 'VALIDATION_ERROR';
    message = 'Validation failed';
    details = {
      issues: error.issues || error.errors,
    };
  }

  // Handle authentication errors
  else if (
    error.name === 'JsonWebTokenError' ||
    error.name === 'TokenExpiredError'
  ) {
    type = 'AUTHENTICATION_ERROR';
    message = 'Invalid or expired token';
  }

  // Handle specific error messages
  else if (error.message) {
    message = error.message;

    // Try to infer error type from message
    const lowerMessage = error.message.toLowerCase();
    if (
      lowerMessage.includes('validation') ||
      lowerMessage.includes('invalid')
    ) {
      type = 'VALIDATION_ERROR';
    } else if (
      lowerMessage.includes('not found') ||
      lowerMessage.includes('does not exist')
    ) {
      type = 'NOT_FOUND_ERROR';
    } else if (
      lowerMessage.includes('unauthorized') ||
      lowerMessage.includes('authentication')
    ) {
      type = 'AUTHENTICATION_ERROR';
    } else if (
      lowerMessage.includes('forbidden') ||
      lowerMessage.includes('permission')
    ) {
      type = 'AUTHORIZATION_ERROR';
    } else if (
      lowerMessage.includes('network') ||
      lowerMessage.includes('connection')
    ) {
      type = 'NETWORK_ERROR';
    }
  }

  return {
    type,
    message,
    code,
    details,
    timestamp,
    originalError: error,
  };
}

/**
 * Gets a user-friendly message for Prisma errors
 */
function getPrismaErrorMessage(
  error: Prisma.PrismaClientKnownRequestError
): string {
  switch (error.code) {
    case 'P2000':
      return 'The provided value for the column is too long';
    case 'P2001':
      return 'The record searched for in the where condition does not exist';
    case 'P2002':
      return 'Unique constraint failed on the fields';
    case 'P2003':
      return 'Foreign key constraint failed on the field';
    case 'P2004':
      return 'A constraint failed on the database';
    case 'P2005':
      return 'The value stored in the database for the field is invalid';
    case 'P2006':
      return 'The provided value for the field is not valid';
    case 'P2007':
      return 'Data validation error';
    case 'P2008':
      return 'Failed to parse the query';
    case 'P2009':
      return 'Failed to validate the query';
    case 'P2010':
      return 'Raw query failed';
    case 'P2011':
      return 'Null constraint violation on the field';
    case 'P2012':
      return 'Missing a required value';
    case 'P2013':
      return 'Missing the required argument';
    case 'P2014':
      return 'The change you are trying to make would violate the required relation';
    case 'P2015':
      return 'A related record could not be found';
    case 'P2016':
      return 'Query interpretation error';
    case 'P2017':
      return 'The relations between connected records could not be resolved';
    case 'P2018':
      return 'The connected records were not found';
    case 'P2019':
      return 'Input error';
    case 'P2020':
      return 'Value out of range for the type';
    case 'P2021':
      return 'The table does not exist in the current database';
    case 'P2022':
      return 'The column does not exist in the current database';
    case 'P2023':
      return 'Inconsistent column data';
    case 'P2024':
      return 'A connection pool timeout occurred';
    case 'P2025':
      return 'An operation failed because it depends on one or more records that were required but not found';
    case 'P2026':
      return 'The current database provider does not support a feature that the query used';
    case 'P2027':
      return 'Multiple errors occurred on the database during query execution';
    default:
      return 'Database error occurred';
  }
}

/**
 * Utility function to check if an error is of a specific type
 */
export function isErrorType(error: AppError, type: ErrorType): boolean {
  return error.type === type;
}

/**
 * Utility function to get error message for display
 */
export function getErrorMessage(error: AppError): string {
  return error.message;
}

/**
 * Utility function to log error for debugging
 */
export function logError(error: AppError, context?: string): void {
  console.error(
    `[${error.timestamp.toISOString()}] ${error.type}: ${error.message}`,
    {
      context,
      code: error.code,
      details: error.details,
      originalError: error.originalError,
    }
  );
}
