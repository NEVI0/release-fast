import { GPTAiAgentProvider } from '@infra/providers';
import { AiAgentProviderAbstract } from '@domain/providers';

let instance: AiAgentProviderAbstract | null = null;

export default function makeAiAgentProvider() {
  if (!instance) {
    instance = new GPTAiAgentProvider();
  }

  return instance;
}
