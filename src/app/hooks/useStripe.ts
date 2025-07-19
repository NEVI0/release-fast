import { useEffect, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';

import { CreatePaymentCheckoutForClientDTO } from '@domain/dtos';

import makeCreatePaymentPortalForClientUseCase from '@factories/useCases/makeCreatePaymentPortalForClientUseCase';
import makeCreatePaymentCheckoutForClientUseCase from '@factories/useCases/makeCreatePaymentCheckoutForClientUseCase';

import { handleError } from '@app/helpers';

import useToast from './useToast';

export default function useStripe() {
  const toast = useToast();
  const [stripe, setStripe] = useState<Stripe | null>(null);

  async function createCheckout(dto: CreatePaymentCheckoutForClientDTO) {
    try {
      if (!stripe) return toast.error('Unable to proceed to checkout...');

      const { sessionId } =
        await makeCreatePaymentCheckoutForClientUseCase().execute(dto);
      if (!sessionId) throw new Error('Unable to proceed to checkout...');

      await stripe.redirectToCheckout({
        sessionId,
      });
    } catch (error) {
      const { message } = handleError(error);
      toast.error(message);
    }
  }

  async function createPortal() {
    try {
      const { url } = await makeCreatePaymentPortalForClientUseCase().execute();
      if (!url) throw new Error('Unable to access your portal...');

      window.location.href = url;
    } catch (error) {
      const { message } = handleError(error);
      toast.error(message);
    }
  }

  useEffect(() => {
    const init = async () => {
      const instance = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
      );

      setStripe(instance);
    };

    init();
  }, []);

  return { createCheckout, createPortal };
}
