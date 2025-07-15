import { NextResponse } from 'next/server';

import makeCreatePaymentPortalUseCase from '@factories/useCases/makeCreatePaymentPortalUseCase';

export const POST = async () => {
  try {
    const { url } = await makeCreatePaymentPortalUseCase().execute();
    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Internal server error';

    return NextResponse.json({ message, error }, { status: 500 });
  }
};
