import { faker } from '@faker-js/faker/locale/en';

import { CreatePaymentWebhookEventDTO } from '@domain/dtos';
import CreatePaymentWebhookEventUseCase from '@domain/useCases/CreatePaymentWebhookEventUseCase';

import { FakePaymentProvider } from '@tests/fakers/providers';

const makeUseCase = () => {
  const provider = new FakePaymentProvider();
  const useCase = new CreatePaymentWebhookEventUseCase(provider);

  return { provider, useCase };
};

describe('CreatePaymentWebhookEventUseCase', () => {
  it('should create the portal correctly', async () => {
    const { provider, useCase } = makeUseCase();

    await useCase.execute({
      body: faker.string.alphanumeric(),
      secret: faker.string.alphanumeric(),
      signature: faker.string.alphanumeric(),
    });

    expect(provider.createEvent).toHaveBeenCalled();
  });

  it.each([
    {
      field: 'body',
      expectedError: 'The body is required',
      dto: {
        body: '',
        secret: faker.string.alphanumeric(),
        signature: faker.string.alphanumeric(),
      },
    },
    {
      field: 'signature',
      expectedError: 'The payment signature is required',
      dto: {
        body: faker.string.alphanumeric(),
        secret: faker.string.alphanumeric(),
        signature: '',
      },
    },
    {
      field: 'secret',
      expectedError: 'The payment secret is required',
      dto: {
        body: faker.string.alphanumeric(),
        secret: '',
        signature: faker.string.alphanumeric(),
      },
    },
  ])(
    'should throw an error if "$field" is missing',
    async ({ dto, expectedError }) => {
      const { useCase } = makeUseCase();

      expect(() =>
        useCase.execute(dto as CreatePaymentWebhookEventDTO)
      ).toThrow(expectedError);
    }
  );
});
