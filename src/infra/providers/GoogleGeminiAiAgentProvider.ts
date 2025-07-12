import { GoogleGenAI } from '@google/genai';

import { AiAgentProviderAbstract } from '@domain/providers';

export default class GoogleGeminiAiAgentProvider
  implements AiAgentProviderAbstract
{
  private gemini: GoogleGenAI = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_API_KEY!,
  });

  public async prompt<T>(prompt: string): Promise<T> {
    try {
      const response = await this.gemini.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      return response.text as T;
    } catch (error) {
      return 'Could not understand what was said!' as T;
    }
  }
}
