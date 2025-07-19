import { FeedbackAbstract } from '@domain/entities';

export default interface FeedbackRepositoryAbstract {
  create(feedback: FeedbackAbstract): Promise<FeedbackAbstract>;
}
