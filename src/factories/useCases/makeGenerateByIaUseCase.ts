import 'server-only';

import { GenerateByIaUseCase } from '@domain/useCases';
import { makeAiAgentProvider } from '@factories/providers';

let instance: GenerateByIaUseCase | null = null;

export default function makeGenerateByIaUseCase() {
  if (!instance) {
    const aiAgentProvider = makeAiAgentProvider();
    instance = new GenerateByIaUseCase(aiAgentProvider);
  }

  return instance;
}
