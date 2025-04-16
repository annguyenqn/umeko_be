export type ReviewResult = 'again' | 'hard' | 'easy';
export type LearningStatus = 'new' | 'learning' | 'mastered' | 'forgotten' | 'graduated';

export interface ReviewState {
  repetitionCount: number;
  interval: number;
  efFactor: number;
}

export interface NextReviewResult extends ReviewState {
  learningStatus: LearningStatus;
  reset: boolean; 
}
export function calculateNextReview(
  quality: ReviewResult,
  state: ReviewState
): NextReviewResult {
  let { repetitionCount, interval, efFactor } = state;

  if (typeof efFactor !== 'number' || isNaN(efFactor)) {
    console.warn('⚠️ efFactor invalid, fallback to 2.5');
    efFactor = 2.5;
  }

  let q: number;
  switch (quality) {
    case 'again':
      q = 0;
      break;
    case 'hard':
      q = 3;
      break;
    case 'easy':
      q = 5;
      break;
    default:
      throw new Error(`Invalid ReviewResult: ${quality}`);
  }

  let reset = false;
  let learningStatus: LearningStatus;

  if (q < 3) {
    repetitionCount = 0;
    interval = 1;
    reset = true;
    learningStatus = 'forgotten';
  } else {
    repetitionCount += 1;
    if (repetitionCount === 1) interval = 1;
    else if (repetitionCount === 2) interval = 6;
    else interval = Math.round(interval * efFactor);
  }

  efFactor = Math.max(1.3, efFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));

  if (repetitionCount === 0) learningStatus = 'forgotten';
  else if (repetitionCount < 3) learningStatus = 'learning';
  else learningStatus = 'mastered';

  return {
    repetitionCount,
    interval,
    efFactor,
    learningStatus,
    reset,
  };
}

