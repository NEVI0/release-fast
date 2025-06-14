'use client';

import { useState } from 'react';

import { Eye, EyeOff, Mail, User } from 'lucide-react';

import { Auth } from '@app/components/common';
import { Button, HorizontalDivider, Input } from '@app/components/ui';

import { AppleButton, GoogleButton } from '../_components';

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Auth>
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

        <Button type="submit">Criar conta</Button>
      </form>

      <section className="flex items-center justify-center gap-8">
        <HorizontalDivider className="w-[64px]" />
        <small className="text-text-secondary text-sm">OU</small>
        <HorizontalDivider className="w-[64px]" />
      </section>

      <footer className="flex flex-col gap-4">
        <GoogleButton>Criar com Google</GoogleButton>
        <AppleButton>Criar com Apple</AppleButton>
      </footer>
    </Auth>
  );
}
