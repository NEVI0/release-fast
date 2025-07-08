import { GenerateByIaDTO } from '@domain/dtos';
import { AiAgentProviderAbstract } from '@domain/providers';

export default class GenerateByIaUseCase {
  constructor(private readonly aiAgentProvider: AiAgentProviderAbstract) {}

  public async execute(dto: GenerateByIaDTO) {
    return await this.aiAgentProvider.prompt<string>(dto.prompt);
  }
}
