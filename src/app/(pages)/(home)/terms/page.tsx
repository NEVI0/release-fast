import Link from 'next/link';

import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { formatDate } from '@app/helpers';
import { LINKS } from '@app/constants/links';

import { Breadcrumb } from '@app/components/ui';

export default function TermsPage() {
  const t = useTranslations('page.terms');
  const compT = useTranslations('component.breadcrumb');

  return (
    <>
      <Breadcrumb
        items={[
          { label: compT('home'), href: '/' },
          { label: compT('terms'), href: '/terms' },
        ]}
      />

      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">{t('title')}</h1>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('acceptance.title')}</h3>
          <p>{t('acceptance.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('serviceUse.title')}</h3>
          <p>{t('serviceUse.description')}</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('serviceUse.item.one')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('serviceUse.item.two')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('serviceUse.item.three')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('serviceUse.item.four')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('serviceUse.item.five')}
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('userContent.title')}</h3>
          <p>{t('userContent.description')}</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('userContent.item.one')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('userContent.item.two')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('userContent.item.three')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('userContent.item.four')}
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('userConduct.title')}</h3>
          <p>{t('userConduct.description')}</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('userConduct.item.one')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('userConduct.item.two')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('userConduct.item.three')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('userConduct.item.four')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('userConduct.item.five')}
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('privacy.title')}</h3>
          <p>
            {t.rich('privacy.description', {
              link: (chunk) => (
                <Link href="/privacy" className="text-primary">
                  {chunk}
                </Link>
              ),
            })}
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('changes.title')}</h3>
          <p>{t('changes.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('limitation.title')}</h3>
          <p>{t('limitation.description')}</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('limitation.item.one')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('limitation.item.two')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('limitation.item.three')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('limitation.item.four')}
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('termination.title')}</h3>
          <p>{t('termination.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('contact.title')}</h3>

          <p>
            {t.rich('contact.description', {
              email: LINKS.SUPPORT_EMAIL,
              link: (chunk) => (
                <a
                  href={`mailto:${LINKS.SUPPORT_EMAIL}`}
                  className="text-primary"
                >
                  {chunk}
                </a>
              ),
            })}
          </p>
        </section>
      </div>

      <small className="text-sm text-text-secondary">
        {t('updatedAt', {
          date: formatDate(new Date('08-24-2025'), 'MMMM DD, YYYY'),
        })}
      </small>
    </>
  );
}
