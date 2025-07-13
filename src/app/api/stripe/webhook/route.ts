import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  try {
    // ...

    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    return NextResponse.json(null, { status: 500 });
  }
};
