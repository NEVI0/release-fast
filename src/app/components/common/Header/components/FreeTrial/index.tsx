import Link from 'next/link';

import { FREE_TRIAL_DAYS } from '@domain/constants/plan';
import { SessionAbstract } from '@domain/entities';
import { isUserInFreeTrial } from '@domain/helpers';

import { fetchUserByIdAction } from '@app/actions';

interface FreeTrialProps {
  session: SessionAbstract | null;
}

export default async function FreeTrial({ session }: FreeTrialProps) {
  if (!session) return null;

  const { user } = await fetchUserByIdAction({ id: session.user.id });
  if (!user) return null;

  const isFreeTrial = user.createdAt
    ? isUserInFreeTrial(user.createdAt)
    : false;

  const shouldShowBanner = isFreeTrial && user.plan === 'free';
  if (!shouldShowBanner) return null;

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
