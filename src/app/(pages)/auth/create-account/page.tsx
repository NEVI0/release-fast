'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Eye, EyeOff, Mail, User } from 'lucide-react';

import { Button, HorizontalDivider, Input } from '@app/components/ui';
import { Return } from '../_components';

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <Return href="/auth" text="Voltar para login" />

      <header className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          <strong className="text-primary">Criar conta</strong> no Release Fast
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Cadastre-se para começar a usar a ferramenta
        </h2>
      </header>

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

      <section className="flex items-center justify-center gap-8">
        <HorizontalDivider className="w-[64px]" />
        <small className="text-text-secondary text-sm">OU</small>
        <HorizontalDivider className="w-[64px]" />
      </section>

      <footer className="flex flex-col gap-4">
        <Button variant="default">
          <Image
            src="/icons/google-icon.png"
            alt="Google Icon"
            width={24}
            height={24}
          />
          Criar com Google
        </Button>

        <Button variant="default">
          <Image
            src="/icons/microsoft-icon.png"
            alt="Microsoft Icon"
            width={24}
            height={24}
          />
          Criar com Microsoft
        </Button>

        <Button variant="default">
          <Image
            src="/icons/apple-icon.png"
            alt="Apple Icon"
            width={24}
            height={24}
          />
          Criar com Apple
        </Button>
      </footer>
    </>
  );
}
