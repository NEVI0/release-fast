'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Eye, EyeOff, Mail, User } from 'lucide-react';

import { Button, Input } from '@app/components/ui';
import { Header, OrSection, TopLogo } from '../_components';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <TopLogo />

      <Header subtitle="Cadastre-se para começar a usar a ferramenta">
        <strong className="text-primary">Criar conta</strong> no Release Fast
      </Header>

      <form action="#" className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Input id="name" label="Seu nome completo" type="text" icon={User} />

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
        </div>

        <Button type="submit" variant="primary">
          Criar conta
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
          Criar com Google
        </Button>

        <Button variant="default">
          <Image
            src="/icons/github.png"
            alt="Github Icon"
            width={24}
            height={24}
          />
          Criar com Github
        </Button>

        <Button variant="default">
          <Image
            src="/icons/gitlab.png"
            alt="Gitlab Icon"
            width={24}
            height={24}
          />
          Criar com Gitlab
        </Button>
      </footer>

      <Link
        href="/auth"
        className="text-center font-semibold underline text-primary"
      >
        Já tem uma conta? Faça o login
      </Link>
    </>
  );
}
