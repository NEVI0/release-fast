import { AiAgentProviderAbstract } from '@domain/providers';

import GoogleGeminiAiAgentProvider from '@infra/providers/GoogleGeminiAiAgentProvider';

let instance: AiAgentProviderAbstract | null = null;

export default function makeAiAgentProvider() {
  if (!instance) {
    instance = new GoogleGeminiAiAgentProvider();
  }

  return instance;
}
