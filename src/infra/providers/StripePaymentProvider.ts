import 'server-only';

import { PaymentUser, PaymentUserAbstract, PlanType } from '@domain/entities';
import {
  CreateCheckoutParams,
  CreateEventParams,
  CreatePortalParams,
  PaymentProviderAbstract,
} from '@domain/providers';

import stripe from '@configs/stripe';

const {
  STRIPE_STARTER_PLAN_PRICE_ID,
  STRIPE_PRO_PLAN_PRICE_ID,
  STRIPE_ENTERPRISE_PLAN_PRICE_ID,
} = process.env;

const PRICE_ID_BY_PLAN: Record<PlanType, string> = {
  free: '',
  starter: STRIPE_STARTER_PLAN_PRICE_ID!,
  pro: STRIPE_PRO_PLAN_PRICE_ID!,
  enterprise: STRIPE_ENTERPRISE_PLAN_PRICE_ID!,
};

export default class StripePaymentProvider implements PaymentProviderAbstract {
  private readonly stripe = stripe;

  public async createUser(user: PaymentUserAbstract) {
    try {
      const customer = await this.stripe.customers.create({
        name: user.name,
        email: user.email,
        metadata: {
          userId: user.id,
        },
      });

      return new PaymentUser({
        id: customer.id,
        name: customer.name || user.name,
        email: customer.email || user.email,
      });
    } catch (error) {
      return null;
    }
  }

  public async createCheckout(params: CreateCheckoutParams) {
    try {
      if (params.plan === 'free') throw new Error();

      const session = await stripe.checkout.sessions.create({
        customer: params.user.paymentId,
        client_reference_id: params.user.id,
        line_items: [
          {
            price: PRICE_ID_BY_PLAN[params.plan],
            quantity: 1,
          },
        ],
        mode: 'subscription',
        payment_method_types: ['card'],
        success_url: params.url.success,
        cancel_url: params.url.cancel,
        metadata: params.metadata,
      });

      return { id: session.id };
    } catch (error) {
      return null;
    }
  }

  public async createPortal(params: CreatePortalParams) {
    try {
      const portal = await this.stripe.billingPortal.sessions.create({
        customer: params.user.paymentId,
        return_url: params.return.url,
      });

      return { url: portal.url };
    } catch (error) {
      return null;
    }
  }

  public createEvent(params: CreateEventParams) {
    try {
      const event = this.stripe.webhooks.constructEvent(
        params.body,
        params.signature,
        params.secret
      );

      return event;
    } catch (error) {
      return null;
    }
  }
}
