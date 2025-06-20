'use client';

import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Eye, EyeOff, Mail } from 'lucide-react';

import { Button, Input } from '@app/components/ui';
import { Header, OrSection, TopLogo } from './_components';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <TopLogo />

      <Header subtitle="Acessar minha conta">
        Release Fast <strong className="text-primary">Login</strong>
      </Header>

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

        <Button type="submit" variant="primary">
          Entrar
        </Button>
      </form>

      <OrSection />

      <footer className="flex flex-col gap-4">
        <Button variant="default">
          <Image
            src="/icons/google.png"
            alt="Google Icon"
            width={24}
            height={24}
          />
          Entrar com Google
        </Button>

        <Button variant="default">
          <Image
            src="/icons/github.png"
            alt="Github Icon"
            width={24}
            height={24}
          />
          Entrar com Github
        </Button>

        <Button variant="default">
          <Image
            src="/icons/gitlab.png"
            alt="Gitlab Icon"
            width={24}
            height={24}
          />
          Entrar com Gitlab
        </Button>
      </footer>

      <Link
        href="/auth/sign-up"
        className="text-center font-semibold underline text-primary"
      >
        Não tem uma conta? Crie sua conta aqui
      </Link>
    </>
  );
}
