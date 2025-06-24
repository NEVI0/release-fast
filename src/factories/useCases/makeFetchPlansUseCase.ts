import { FetchPlansUseCase } from '@domain/useCases';

let instance: FetchPlansUseCase | null = null;

export default function makeFetchPlansUseCase() {
  if (!instance) {
    instance = new FetchPlansUseCase();
  }

  return instance;
}
