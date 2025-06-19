import { ChevronRight } from 'lucide-react';

import { LINKS } from '@app/constants/links';
import { Breadcrumb } from '@app/components/ui';

export default function Terms() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Início', href: '/' },
          { label: 'Termos e Condições de Uso', href: '/terms' },
        ]}
      />

      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Termos e Condições de Uso</h1>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">1. Aceitação dos Termos</h3>

          <p>
            Ao acessar e utilizar o Release Fast, você concorda em cumprir e
            ficar vinculado aos seguintes termos e condições de uso. Se você não
            concordar com qualquer parte destes termos, não deverá utilizar
            nossa plataforma.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">2. Uso do Serviço</h3>

          <p>
            O Release Fast é uma plataforma para compartilhamento de conteúdo e
            interação entre usuários. Ao utilizar nossos serviços, você concorda
            em:
          </p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Fornecer informações verdadeiras e precisas durante o cadastro;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Manter suas credenciais de acesso em segurança;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Não compartilhar sua conta com terceiros;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Respeitar outros usuários e suas opiniões;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Não publicar conteúdo ilegal, ofensivo ou inadequado;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">3. Conteúdo do Usuário</h3>

          <p>Ao publicar conteúdo em nossa plataforma, você:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Mantém seus direitos autorais sobre o conteúdo;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Concede ao Release Fast uma licença não exclusiva para usar,
              modificar e distribuir seu conteúdo;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              É responsável por todo o conteúdo que publica;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Garante que possui todos os direitos necessários para compartilhar
              o conteúdo;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">4. Conduta do Usuário</h3>

          <p>É proibido:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Publicar conteúdo ilegal, difamatório, obsceno ou ofensivo;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Utilizar a plataforma para spam ou propaganda não autorizada;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Violar direitos de propriedade intelectual de terceiros;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Realizar atividades que possam danificar ou sobrecarregar nossos
              sistemas;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Coletar dados de outros usuários sem autorização;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">5. Privacidade e Dados</h3>

          <p>
            Nossa política de privacidade descreve como coletamos, usamos e
            protegemos suas informações pessoais. Ao utilizar nossa plataforma,
            você concorda com nossas práticas de privacidade conforme descrito
            em nossa Política de Privacidade.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">6. Modificações dos Termos</h3>

          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer
            momento. As alterações entrarão em vigor imediatamente após sua
            publicação. O uso continuado da plataforma após as modificações
            constitui aceitação dos novos termos.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">
            7. Limitação de Responsabilidade
          </h3>

          <p>O Release Fast não se responsabiliza por:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Conteúdo gerado por usuários;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Danos causados por uso inadequado da plataforma;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Interrupções temporárias do serviço;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Perda de dados ou conteúdo;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">8. Encerramento da Conta</h3>

          <p>
            Reservamo-nos o direito de suspender ou encerrar contas que violem
            estes termos ou que pratiquem condutas inadequadas. Você também pode
            encerrar sua conta a qualquer momento através das configurações da
            plataforma.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">9. Contato</h3>

          <p>
            Para questões relacionadas a estes termos, entre em contato através
            do email de{' '}
            <a href={`mailto:${LINKS.SUPPORT_EMAIL}`} className="text-primary">
              {LINKS.SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>

      <small className="text-sm text-gray-600">
        Última atualização: 18/06/2025
      </small>
    </>
  );
}
