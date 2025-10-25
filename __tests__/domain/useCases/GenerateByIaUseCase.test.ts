import { faker } from '@faker-js/faker/locale/en';

import GenerateByIaUseCase from '@domain/useCases/GenerateByIaUseCase';

import { FakeAiAgentProvider } from '@tests/fakers/providers';

const makeUseCase = () => {
  const provider = new FakeAiAgentProvider();
  const useCase = new GenerateByIaUseCase(provider);

  return { provider, useCase };
};

describe('GenerateByIaUseCase', () => {
  it('should return an A.I prompt correctly', async () => {
    const { useCase } = makeUseCase();

    const response = await useCase.execute({ prompt: faker.lorem.words() });

    expect(response).toBe('This is a fake response from the AI agent');
  });

  it('should throw an error if "prompt" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ prompt: '' })).rejects.toThrow(
      'You must provide a prompt for the I.A agent'
    );
  });
});
