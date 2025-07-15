import 'server-only';

import { SessionAbstract, UserAbstract } from '@domain/entities';
import { UserRepositoryAbstract } from '@domain/repositories';
import { PaymentProviderAbstract } from '@domain/providers';

import { auth } from '@configs/auth';

export default class CreatePaymentPortalUseCase {
  constructor(
    private readonly paymentProvider: PaymentProviderAbstract,
    private readonly userRepository: UserRepositoryAbstract
  ) {}

  public async execute() {
    const session = await this.fetchSession();
    const user = await this.fetchUserData(session.user.id);

    const portal = await this.paymentProvider.createPortal({
      user: {
        paymentId: user.paymentId!,
      },
      return: {
        url: `${process.env.NEXT_PUBLIC_APP_URL!}/dash/profile`,
      },
    });
    if (!portal) throw new Error('Could not create the portal...');

    return portal;
  }

  private async fetchSession() {
    const session = await auth();
    if (!session || !session.user) throw new Error('Unauthorized');

    return session as SessionAbstract;
  }

  private async fetchUserData(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user || !user.paymentId) throw new Error('Unauthorized');

    return user as UserAbstract;
  }
}
