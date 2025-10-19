import { faker } from '@faker-js/faker';

import { CreateFeedbackDTO } from '@domain/dtos';
import CreateFeedbackUseCase from '@domain/useCases/CreateFeedbackUseCase';

import { FakeFeedbackRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeFeedbackRepository();
  const useCase = new CreateFeedbackUseCase(repository);

  return { repository, useCase };
};

describe('CreateFeedbackUseCase', () => {
  it('should create feedback correctly', async () => {
    const { useCase } = makeUseCase();

    const dto: CreateFeedbackDTO = {
      userId: faker.string.uuid(),
      title: faker.word.adjective(),
      description: faker.lorem.paragraph(),
    };

    const feedback = await useCase.execute(dto);

    expect(feedback.id).toBeDefined();
    expect(feedback.userId).toBe(dto.userId);
    expect(feedback.title).toBe(dto.title);
    expect(feedback.description).toBe(dto.description);
    expect(feedback.createdAt).toBeDefined();
  });

  it.each([
    {
      field: 'title',
      dto: {
        userId: faker.string.uuid(),
        title: '',
        description: faker.lorem.sentence(),
      },
      expectedError: 'You must provide the feedback title',
    },
    {
      field: 'description',
      dto: {
        userId: faker.string.uuid(),
        title: faker.word.adjective(),
        description: '',
      },
      expectedError: 'You must provide the feedback description',
    },
  ])(
    'should throw an error if "$field" is missing',
    async ({ dto, expectedError }) => {
      const { useCase } = makeUseCase();

      await expect(useCase.execute(dto as CreateFeedbackDTO)).rejects.toThrow(
        expectedError
      );
    }
  );
});
