import { OpenAI } from 'openai';

import { AiAgentProviderAbstract } from '@domain/providers';

export default class GPTAiAgentProvider implements AiAgentProviderAbstract {
  private openai: OpenAI = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY!,
  });

  constructor() {}

  public async prompt<T>(prompt: string): Promise<T> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });

      return completion.choices[0].message.content as T;
    } catch (error) {
      return 'Could not understand what was said!' as T;
    }
  }
}
