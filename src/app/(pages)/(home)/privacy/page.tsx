import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { formatDate } from '@app/helpers';
import { LINKS } from '@app/constants/links';

import { Breadcrumb } from '@app/components/ui';

export default function PrivacyPage() {
  const t = useTranslations('page.privacy');
  const compT = useTranslations('component.breadcrumb');

  return (
    <>
      <Breadcrumb
        items={[
          { label: compT('home'), href: '/' },
          { label: compT('privacy'), href: '/privacy' },
        ]}
      />

      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-bold">{t('title')}</h1>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('intro.title')}</h3>
          <p>{t('intro.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('collectData.title')}</h3>
          <p>{t('collectData.description')}</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('collectData.item.one')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('collectData.item.two')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('collectData.item.three')}
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">
            {t('useOfInformation.title')}
          </h3>
          <p>{t('useOfInformation.description')}</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('useOfInformation.item.one')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('useOfInformation.item.two')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('useOfInformation.item.three')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('useOfInformation.item.four')}
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('sharedData.title')}</h3>
          <p>{t('sharedData.description')}</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('sharedData.item.one')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('sharedData.item.two')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('sharedData.item.three')}
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('secure.title')}</h3>
          <p>{t('secure.description')}</p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('rights.title')}</h3>
          <p>{t('rights.description')}</p>

          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('rights.item.one')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('rights.item.two')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('rights.item.three')}
            </li>

            <li className="flex items-center gap-4">
              <div>
                <ChevronRight className="text-primary size-4" />
              </div>
              {t('rights.item.four')}
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">{t('changes.title')}</h3>
          <p>{t('changes.description')}</p>
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
