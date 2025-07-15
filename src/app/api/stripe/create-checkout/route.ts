import { NextResponse } from 'next/server';

import makeCreatePaymentCheckoutUseCase from '@factories/useCases/makeCreatePaymentCheckoutUseCase';

export const POST = async (request: Request) => {
  try {
    const { plan, metadata } = await request.json();

    const { id } = await makeCreatePaymentCheckoutUseCase().execute({
      plan,
      metadata,
    });

    return NextResponse.json({ sessionId: id }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Internal server error';

    return NextResponse.json({ message, error }, { status: 500 });
  }
};
