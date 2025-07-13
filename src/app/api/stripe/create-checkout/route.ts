import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  try {
    // ...

    return NextResponse.json({ sessionId: 0 }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 }
    );
  }
};
