import { Mail, SendHorizonal } from 'lucide-react';

import { Button } from '@app/components/ui';

export default function Form() {
  return (
    <section className="flex flex-col items-center gap-8">
      <h2 className="text-2xl font-bold">Já está em andamento...</h2>

      <div className="flex flex-col gap-4 w-[90%]">
        <p className="text-center text-text-secondary">
          O’que isso quer dizer? Se você chegou até aqui é porque entendeu o
          quanto uma comunicação devida com o seu usuário é importante. Tendo
          isso em mente, eu Névio (que estou por trás deste projeto), já estou
          em andamento com o desenvolvimento da solução indicada a cima.
        </p>

        <p className="text-center text-text-secondary">
          Ficou interessado e quer saber quando você poderá utilizar a melhor
          ferramenta de comunicação do mercado? Informe seu e-mail abaixo que te
          deixarei por dentro quando a ferramenta estiver disponível!
        </p>
      </div>

      <form className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-3 border-2 border-primary bg-container h-[48px] w-[424px] rounded-xl px-6">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="h-full w-full"
          />
          <Mail className="size-5 text-primary" />
        </div>

        <Button type="submit">
          Enviar
          <SendHorizonal className="size-5" />
        </Button>
      </form>
    </section>
  );
}
