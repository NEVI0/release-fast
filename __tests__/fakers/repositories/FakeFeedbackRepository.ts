import { FeedbackAbstract } from '@domain/entities';
import { FeedbackRepositoryAbstract } from '@domain/repositories';

export default class FakeFeedbackRepository
  implements FeedbackRepositoryAbstract
{
  private feedbacks: FeedbackAbstract[] = [];

  public create: FeedbackRepositoryAbstract['create'] = async (feedback) => {
    this.feedbacks.push(feedback);
    return Promise.resolve(feedback);
  };
}
