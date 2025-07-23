'use server';

import { auth } from '@configs/auth';

import makeFetchUserByIdUseCase from '@factories/useCases/makeFetchUserByIdUseCase';

export default async function fetchUserByIdAction() {
  try {
    const session = await auth();
    if (!session || !session.user) throw new Error();

    const user = await makeFetchUserByIdUseCase().execute({
      id: session.user.id!,
    });
    if (!user) throw new Error();

    return {
      user: {
        ...user,
      },
    };
  } catch (error) {
    return { user: null };
  }
}
