import { faker } from '@faker-js/faker/locale/en';

import { UpdateUserDataDTO } from '@domain/dtos';
import UpdateUserDataUseCase from '@domain/useCases/UpdateUserDataUseCase';

import { FakeUser } from '@tests/fakers/entities';
import { FakeUserRepository } from '@tests/fakers/repositories';

const makeUseCase = () => {
  const repository = new FakeUserRepository();
  const useCase = new UpdateUserDataUseCase(repository);

  return { repository, useCase };
};

describe('UpdateUserDataUseCase', () => {
  const baseDto: UpdateUserDataDTO = {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    email: faker.internet.email(),
  };

  it('should update user correctly', async () => {
    const { repository, useCase } = makeUseCase();

    const id = faker.string.uuid();
    repository.mockUser(new FakeUser({ id }));

    const dto: UpdateUserDataDTO = { ...baseDto, id };
    const user = await useCase.execute(dto);

    expect(user.id).toBe(dto.id);
    expect(user.name).toBe(dto.name);
    expect(user.email).toBe(dto.email);
  });

  it('should throw an error if user is not authenticated', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute(baseDto)).rejects.toThrow('Unauthorized');
  });

  it('should throw an error if "id" is missing', async () => {
    const { useCase } = makeUseCase();
    await expect(useCase.execute({ ...baseDto, id: '' })).rejects.toThrow(
      'The user ID is required'
    );
  });

  it.each([
    {
      field: 'name',
      expectedError: 'The name is required',
      dto: { ...baseDto, name: '' },
    },
    {
      field: 'email',
      expectedError: 'The e-mail is required',
      dto: { ...baseDto, email: '' },
    },
  ])(
    'should throw an error if "$field" is missing',
    async ({ dto, expectedError }) => {
      const { repository, useCase } = makeUseCase();

      const id = faker.string.uuid();
      repository.mockUser(new FakeUser({ id }));

      await expect(
        useCase.execute({ ...dto, id } as UpdateUserDataDTO)
      ).rejects.toThrow(expectedError);
    }
  );
});
