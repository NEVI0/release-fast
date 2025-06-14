import { Mail } from 'lucide-react';

import { Button, Input } from '@app/components/ui';
import { Return } from '../_components';

export default function ForgotPassword() {
  return (
    <>
      <Return href="/auth" text="Voltar para login" />

      <header className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          <strong className="text-primary">Recuperar</strong> senha
        </h1>

        <h2 className="font-semibold text-2xl text-text-secondary">
          Digite o e-mail de sua conta cadastrada abaixo
        </h2>
      </header>

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

        <Button type="submit">Enviar código</Button>
      </form>
    </>
  );
}
