import { faker } from '@faker-js/faker/locale/en';

import { CreateSupportTicketDTO } from '@domain/dtos';
import CreateSupportTicketUseCase from '@domain/useCases/CreateSupportTicketUseCase';

import { FakeSupportTicketRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeSupportTicketRepository();
  const useCase = new CreateSupportTicketUseCase(repository);

  return { repository, useCase };
};

describe('CreateSupportTicketUseCase', () => {
  const baseDto: CreateSupportTicketDTO = {
    title: faker.word.adjective(),
    description: faker.lorem.paragraph(),
    userId: faker.string.uuid(),
  };

  it('should create ticket correctly', async () => {
    const { useCase } = makeUseCase();

    const ticket = await useCase.execute(baseDto);

    expect(ticket.id).toBeDefined();
    expect(ticket.userId).toBe(baseDto.userId);
    expect(ticket.title).toBe(baseDto.title);
    expect(ticket.description).toBe(baseDto.description);
    expect(ticket.createdAt).toBeDefined();
  });

  it.each([
    {
      field: 'title',
      expectedError: 'You must provide the support ticket title',
      dto: {
        ...baseDto,
        title: '',
      },
    },
    {
      field: 'description',
      expectedError: 'You must provide the support ticket description',
      dto: {
        ...baseDto,
        description: '',
      },
    },
    {
      field: 'userId',
      expectedError: 'The user ID is required',
      dto: {
        ...baseDto,
        userId: '',
      },
    },
  ])(
    'should throw an error if "$field" is missing',
    async ({ dto, expectedError }) => {
      const { useCase } = makeUseCase();

      await expect(
        useCase.execute(dto as CreateSupportTicketDTO)
      ).rejects.toThrow(expectedError);
    }
  );
});
