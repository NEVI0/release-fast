import GenerateByIaUseCase from '@domain/useCases/GenerateByIaUseCase';
import makeAiAgentProvider from '@factories/providers/makeAiAgentProvider';

let instance: GenerateByIaUseCase | null = null;

export default function makeGenerateByIaUseCase() {
  if (!instance) {
    const aiAgentProvider = makeAiAgentProvider({ agent: 'gemini' });
    instance = new GenerateByIaUseCase(aiAgentProvider);
  }

  return instance;
}
