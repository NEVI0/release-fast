import { AiAgentProviderAbstract } from '@domain/providers';

import GoogleGeminiAiAgentProvider from '@infra/providers/GoogleGeminiAiAgentProvider';
import GPTAiAgentProvider from '@infra/providers/GPTAiAgentProvider';

type Agent = 'gemini' | 'openai';

interface Params {
  agent: Agent;
}

let instance: AiAgentProviderAbstract | null = null;

const AI_AGENT: Record<Agent, any> = {
  gemini: GoogleGeminiAiAgentProvider,
  openai: GPTAiAgentProvider,
};

export default function makeAiAgentProvider({ agent }: Params) {
  if (!instance) {
    const AiAgent = AI_AGENT[agent];
    instance = new AiAgent() as AiAgentProviderAbstract;
  }

  return instance;
}
