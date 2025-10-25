import AiAgentProviderAbstract from '@domain/providers/AiAgentProvider';

export default class FakeAiAgentProvider implements AiAgentProviderAbstract {
  public prompt: AiAgentProviderAbstract['prompt'] = async <T>(_: string) => {
    return Promise.resolve('This is a fake response from the AI agent' as T);
  };
}
