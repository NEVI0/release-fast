import { GenerateByIaDTO } from '@domain/dtos';
import { AiAgentProviderAbstract } from '@domain/providers';

export default class GenerateByIaUseCase {
  constructor(private readonly aiAgentProvider: AiAgentProviderAbstract) {}

  public async execute(dto: GenerateByIaDTO) {
    this.validateDto(dto);
    return await this.aiAgentProvider.prompt<string>(dto.prompt);
  }

  private validateDto(dto: GenerateByIaDTO) {
    if (!dto.prompt) {
      throw new Error('You must provide a prompt for the I.A agent');
    }
  }
}
