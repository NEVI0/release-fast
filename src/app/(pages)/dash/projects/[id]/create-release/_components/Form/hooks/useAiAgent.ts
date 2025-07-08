import { useMutation } from '@tanstack/react-query';

import { GenerateByIaDTO } from '@domain/dtos';
import makeGenerateByIaUseCase from '@factories/useCases/makeGenerateByIaUseCase';

export default function useAiAgent() {
  const mutation = useMutation({
    mutationFn: async (dto: GenerateByIaDTO) => {
      return await makeGenerateByIaUseCase().execute(dto);
    },
  });

  return {
    prompt: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
}
