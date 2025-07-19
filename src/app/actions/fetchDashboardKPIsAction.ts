'use server';

import { FetchDashboardKPIsDTO } from '@domain/dtos';
import makeFetchDashboardKPIsUseCase from '@factories/useCases/makeFetchDashboardKPIsUseCase';

export default async function fetchDashboardKPIsAction(
  dto: FetchDashboardKPIsDTO
) {
  try {
    const results = await makeFetchDashboardKPIsUseCase().execute(dto);
    return results;
  } catch (error) {
    return {
      projects: 0,
      releases: 0,
    };
  }
}
