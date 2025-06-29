'use client';

import { logoutAccountAction } from '@app/actions';

export default function LogoutLink() {
  return (
    <button
      onClick={logoutAccountAction}
      className="cursor-pointer h-full flex items-center justify-center focus:underline focus:text-primary hover:underline hover:text-primary"
    >
      Sair
    </button>
  );
}
