'use client';

import { accessAccountAction } from '@app/actions';

export default function LogoutLink() {
  return (
    <button
      onClick={() => accessAccountAction()}
      className="cursor-pointer h-full flex items-center justify-center focus:underline focus:text-primary hover:underline hover:text-primary"
    >
      Sair
    </button>
  );
}
