import 'server-only';

import { SessionAbstract, UserAbstract } from '@domain/entities';
import { CreatePaymentCheckoutDTO } from '@domain/dtos';
import { UserRepositoryAbstract } from '@domain/repositories';
import { PaymentProviderAbstract } from '@domain/providers';

import { auth } from '@configs/auth';

export default class CreatePaymentCheckoutUseCase {
  constructor(
    private readonly paymentProvider: PaymentProviderAbstract,
    private readonly userRepository: UserRepositoryAbstract
  ) {}

  public async execute(dto: CreatePaymentCheckoutDTO) {
    const session = await this.fetchSession();
    const user = await this.fetchUserData(session.user.id);

    let paymentUserId = user.paymentId || null;
    if (!paymentUserId) paymentUserId = await this.createPaymentUser(user);

    const checkout = await this.paymentProvider.createCheckout({
      user: {
        id: user.id,
        paymentId: paymentUserId,
      },
      url: {
        success: `${process.env.NEXT_PUBLIC_APP_URL!}/checkout/success`,
        cancel: `${process.env.NEXT_PUBLIC_APP_URL!}/checkout/cancel`,
      },
      plan: dto.plan,
      metadata: dto.metadata,
    });
    if (!checkout) throw new Error('Could not create the checkout...');

    return checkout;
  }

  private async fetchSession() {
    const session = await auth();
    if (!session || !session.user) throw new Error('Unauthorized');

    return session as SessionAbstract;
  }

  private async fetchUserData(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) throw new Error('Unauthorized');
    if (!user.email) throw new Error('You must provide your e-mail first');

    return user as UserAbstract;
  }

  private async createPaymentUser(user: UserAbstract) {
    const paymentUser = await this.paymentProvider.createUser({
      id: user.id,
      name: user.name,
      email: user.email,
    });
    if (!paymentUser)
      throw new Error('Could not create the user for payments...');

    await this.userRepository.update({ ...user, paymentId: paymentUser.id });

    return paymentUser.id;
  }
}
