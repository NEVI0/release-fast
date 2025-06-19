import { Mail } from 'lucide-react';

import Link from 'next/link';

import { Button, Input } from '@app/components/ui';
import { Header, TopLogo } from '../_components';

export default function ForgotPassword() {
  return (
    <>
      <TopLogo />

      <Header subtitle="Digite o e-mail de sua conta cadastrada abaixo">
        <strong className="text-primary">Recuperar</strong> senha
      </Header>

      <p className="text-text-secondary">
        O e-mail será enviado para você e nele contém todas as informações
        necessárias para recuperar sua senha. Caso não receba, verifique se o
        e-mail está correto e tente novamente.
      </p>

      <form action="#" className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="exemplo@email.com"
            icon={Mail}
          />
        </div>

        <Button type="submit" variant="primary">
          Enviar código
        </Button>
      </form>

      <Link
        href="/auth"
        className="text-center font-semibold underline text-primary"
      >
        Voltar para login
      </Link>
    </>
  );
}
