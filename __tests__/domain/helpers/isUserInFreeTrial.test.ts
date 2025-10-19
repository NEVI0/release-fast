import { isUserInFreeTrial } from '@domain/helpers';

describe('isUserInFreeTrial', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2025-01-01'));
  });

  it('should return "true" if the user is in free trial', () => {
    const isInFreeTrial = isUserInFreeTrial(new Date('2025-01-01'));
    expect(isInFreeTrial).toBe(true);
  });

  it('should return "false" if the user is not in free trial', () => {
    const isInFreeTrial = isUserInFreeTrial(new Date('2024-01-01'));
    expect(isInFreeTrial).toBe(false);
  });
});
