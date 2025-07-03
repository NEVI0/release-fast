import { GoogleGeminiAiAgentProvider } from '@infra/providers';
import { AiAgentProviderAbstract } from '@domain/providers';

let instance: AiAgentProviderAbstract | null = null;

export default function makeAiAgentProvider() {
  if (!instance) {
    instance = new GoogleGeminiAiAgentProvider();
  }

  return instance;
}
