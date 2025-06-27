'use client';

import { useState } from 'react';

import Link from 'next/link';
import { Eye, EyeOff, Mail, User } from 'lucide-react';

import { Button, Input } from '@app/components/ui';
import { AuthProviders, Header, OrSection, TopLogo } from '../_components';

export default function SignUpPage() {
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
      <AuthProviders
        google="Criar com Google"
        github="Criar com Github"
        gitlab="Criar com Gitlab"
      />

      <Link
        href="/auth"
        className="text-center font-semibold underline text-primary"
      >
        Já tem uma conta? Faça o login
      </Link>
    </>
  );
}
