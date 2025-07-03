export default interface AiAgentProviderAbstract {
  prompt<T>(prompt: string): Promise<T>;
}
