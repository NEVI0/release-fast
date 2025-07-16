import { NextResponse } from 'next/server';

import { PlanType } from '@domain/entities';

import makeCreatePaymentWebhookEventUseCase from '@factories/useCases/makeCreatePaymentWebhookEventUseCase';
import makeUpdateUserPlanUseCase from '@factories/useCases/makeUpdateUserPlanUseCase';

export const POST = async (request: Request) => {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    const { STRIPE_WEBHOOK_SECRET } = process.env!;
    if (!signature || !STRIPE_WEBHOOK_SECRET) {
      throw new Error('Stripe webhook secret is not set');
    }

    const event = makeCreatePaymentWebhookEventUseCase().execute({
      body,
      signature,
      secret: STRIPE_WEBHOOK_SECRET,
    });
    if (!event) throw new Error('Could not create payment webhook event...');

    if (event.type === 'checkout.session.completed') {
      // Completou o checkout (assinatura ou pagamento unico)

      if (event.data.object.payment_status === 'paid') {
        // Realizou o pagamento
        console.log({ receivedMetadata: event.data.object.metadata });
        const { userId, plan } = event.data.object.metadata!;

        await makeUpdateUserPlanUseCase().execute({
          userId,
          plan: plan as PlanType,
        });
      }
    } else if (event.type === 'customer.subscription.deleted') {
      // Usuário cancelou a assinatura
      console.log({ receivedMetadata: event.data.object.metadata });
      const { userId } = event.data.object.metadata!;

      await makeUpdateUserPlanUseCase().execute({
        userId,
        plan: 'free' as PlanType,
      });
    }

    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Internal server error';

    return NextResponse.json({ message, error }, { status: 500 });
  }
};
