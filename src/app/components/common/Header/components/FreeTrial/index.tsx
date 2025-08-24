import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { FREE_TRIAL_DAYS } from '@domain/constants/plan';
import { isUserInFreeTrial } from '@domain/helpers';

import { fetchUserByIdAction } from '@app/actions';

export default async function FreeTrial() {
  const t = useTranslations('component.header.dash.trial');

  const { user } = await fetchUserByIdAction();
  if (!user) return null;

  const shouldShowBanner = user.plan === 'free';
  if (!shouldShowBanner) return null;

  const isFreeTrial = isUserInFreeTrial(user.createdAt);

  return (
    <div className="flex items-center justify-center w-full py-1 bg-primary text-white">
      <div className="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8 ">
        {isFreeTrial ? (
          <p className="text-left">
            {t.rich('message.onTrial', {
              days: FREE_TRIAL_DAYS,
              strong: (chunk) => (
                <strong className="font-semibold">{chunk}</strong>
              ),
            })}
          </p>
        ) : (
          <p className="text-left">
            {t.rich('message.freePlan', {
              strong: (chunk) => (
                <strong className="font-semibold">{chunk}</strong>
              ),
            })}
          </p>
        )}

        <Link
          href="/dash/profile/plans"
          className="text-right font-semibold underline"
        >
          {t('upgrade')}
        </Link>
      </div>
    </div>
  );
}
