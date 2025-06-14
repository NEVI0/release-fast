'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Eye, EyeOff, Mail } from 'lucide-react';

import { Auth } from '@app/components/common';
import { Button, HorizontalDivider, Input } from '@app/components/ui';

import { AppleButton, GoogleButton } from './_components';

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Auth>
      <header className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Release Fast <strong className="text-primary">Login</strong>
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Acessar minha conta
        </h2>
      </header>

      <form action="#" className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="exemplo@email.com"
            icon={Mail}
          />

          <Input
            id="password"
            label="Sua senha"
            type={showPassword ? 'text' : 'password'}
            icon={showPassword ? EyeOff : Eye}
            onClickIcon={() => setShowPassword(!showPassword)}
          />

          <Link
            href="/auth/forgot-password"
            className="text-right font-semibold underline text-primary"
          >
            Esqueceu sua senha?
          </Link>
        </div>

        <Button type="submit">Entrar</Button>
      </form>

      <section className="flex items-center justify-center gap-8">
        <HorizontalDivider className="w-[64px]" />
        <small className="text-text-secondary text-sm">OU</small>
        <HorizontalDivider className="w-[64px]" />
      </section>

      <footer className="flex flex-col gap-4">
        <GoogleButton>Entrar com Google</GoogleButton>
        <AppleButton>Entrar com Apple</AppleButton>
      </footer>

      <Link
        href="/auth/create-account"
        className="text-center font-semibold underline text-primary"
      >
        Não tem uma conta? Crie sua conta aqui
      </Link>
    </Auth>
  );
}
