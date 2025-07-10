'use client';

import { accessAccountAction } from '@app/actions';

export default function LoginLink() {
  return (
    <button
      type="submit"
      className="cursor-pointer h-full flex items-center justify-center font-semibold underline text-primary"
      onClick={() => accessAccountAction('github')}
    >
      Acessar com GitHub
    </button>
  );
}
