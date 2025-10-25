import FetchPlansUseCase from '@domain/useCases/FetchPlansUseCase';

const makeUseCase = () => {
  const useCase = new FetchPlansUseCase();
  return { useCase };
};

describe('FetchPlansUseCase', () => {
  it('should return all available plans', async () => {
    const { useCase } = makeUseCase();

    const plans = useCase.execute();

    expect(plans).toHaveLength(3);
  });
});
