export type ErrorType =
  | 'VALIDATION_ERROR'
  | 'NETWORK_ERROR'
  | 'AUTHENTICATION_ERROR'
  | 'AUTHORIZATION_ERROR'
  | 'NOT_FOUND_ERROR'
  | 'RATE_LIMIT_ERROR'
  | 'INTERNAL_SERVER_ERROR'
  | 'UNKNOWN_ERROR';

export interface AppError {
  type: ErrorType;
  message: string;
  code?: string | number;
  details?: any;
  timestamp: Date;
  originalError?: any;
}

/**
 * Simplified error handler for basic HTTP errors and Error classes.
 */
export default function handleError(error: any): AppError {
  const timestamp = new Date();

  let type: ErrorType = 'UNKNOWN_ERROR';
  let message = 'An unexpected error occurred';
  let code: string | number | undefined;
  let details: any = undefined;

  // Handle HTTP errors (status property)
  if (typeof error?.status === 'number') {
    code = error.status;
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
  }
  // Handle network errors
  else if (
    (typeof error?.code === 'string' &&
      (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND')) ||
    (error instanceof TypeError &&
      error.message?.toLowerCase().includes('fetch'))
  ) {
    type = 'NETWORK_ERROR';
    message = error.message || 'Network error';
    code = error.code;
  }
  // Handle validation errors (Zod, Joi, etc.)
  else if (error?.name === 'ZodError' || error?.issues) {
    type = 'VALIDATION_ERROR';
    message = 'Validation failed';
    details = {
      issues: error.issues || error.errors,
    };
  }
  // Handle authentication errors (JWT, etc.)
  else if (
    error?.name === 'JsonWebTokenError' ||
    error?.name === 'TokenExpiredError'
  ) {
    type = 'AUTHENTICATION_ERROR';
    message = 'Invalid or expired token';
  }
  // Handle standard Error
  else if (error instanceof Error) {
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
  // Fallback for unknown error shapes
  else if (error && typeof error === 'object' && error.message) {
    message = error.message;
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
