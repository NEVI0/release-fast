import Link from 'next/link';

import { FREE_TRIAL_DAYS } from '@domain/constants/plan';
import { isUserInFreeTrial } from '@domain/helpers';

import { fetchUserByIdAction } from '@app/actions';

export default async function FreeTrial() {
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
            You are currently on the{' '}
            <strong className="font-semibold">
              free trial of {FREE_TRIAL_DAYS} days
            </strong>
          </p>
        ) : (
          <p className="text-left">
            You are currently on the{' '}
            <strong className="font-semibold">free</strong> plan
          </p>
        )}

        <Link
          href="/dash/profile/plans"
          className="text-right font-semibold underline"
        >
          Click here to upgrade your plan! 🚀
        </Link>
      </div>
    </div>
  );
}
