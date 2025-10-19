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
  const baseDto: CreateFeedbackDTO = {
    title: faker.word.adjective(),
    description: faker.lorem.paragraph(),
    userId: faker.string.uuid(),
  };

  it('should create feedback correctly', async () => {
    const { useCase } = makeUseCase();

    const feedback = await useCase.execute(baseDto);

    expect(feedback.id).toBeDefined();
    expect(feedback.userId).toBe(baseDto.userId);
    expect(feedback.title).toBe(baseDto.title);
    expect(feedback.description).toBe(baseDto.description);
    expect(feedback.createdAt).toBeDefined();
  });

  it.each([
    {
      field: 'title',
      expectedError: 'You must provide the feedback title',
      dto: {
        ...baseDto,
        title: '',
      },
    },
    {
      field: 'description',
      expectedError: 'You must provide the feedback description',
      dto: {
        ...baseDto,
        description: '',
      },
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
