import { ChevronRight } from 'lucide-react';

import { LINKS } from '@app/constants/links';
import { Breadcrumb } from '@app/components/ui';

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Início', href: '/' },
          { label: 'Política de Privacidade', href: '/privacy' },
        ]}
      />

      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">Política de Privacidade</h1>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">1. Introdução</h3>

          <p>
            Esta Política de Privacidade descreve como o Release Fast coleta,
            usa e protege suas informações pessoais quando você utiliza nossa
            plataforma. Ao acessar e usar nosso serviço, você concorda com as
            práticas descritas nesta política.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">2. Informações que Coletamos</h3>

          <p>Coletamos os seguintes tipos de informações:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Informações de cadastro (nome, email, foto de perfil);
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Dados de uso da plataforma (posts, comentários, interações);
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Informações técnicas (endereço IP, tipo de navegador,
              dispositivo);
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">3. Como Usamos suas Informações</h3>

          <p>Utilizamos suas informações para:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Fornecer e manter nossos serviços;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Personalizar sua experiência na plataforma;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Comunicar-se com você sobre atualizações e novidades;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Melhorar nossos serviços e segurança;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">4. Compartilhamento de Dados</h3>

          <p>
            Não vendemos suas informações pessoais. Podemos compartilhar seus
            dados apenas nas seguintes situações:
          </p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Com seu consentimento explícito;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Para cumprir obrigações legais;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Com prestadores de serviços que nos auxiliam na operação da
              plataforma;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">5. Segurança dos Dados</h3>

          <p>
            Implementamos medidas de segurança técnicas e organizacionais para
            proteger suas informações pessoais contra acesso não autorizado,
            alteração, divulgação ou destruição.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">6. Seus Direitos</h3>

          <p>Você tem direito a:</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Acessar suas informações pessoais;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Corrigir dados imprecisos;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Solicitar a exclusão de seus dados;
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              Retirar seu consentimento a qualquer momento;
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">7. Alterações na Política</h3>

          <p>
            Podemos atualizar esta política periodicamente. Notificaremos sobre
            mudanças significativas através da plataforma ou por email.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">8. Contato</h3>

          <p>
            Para questões sobre privacidade, entre em contato através do email{' '}
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
