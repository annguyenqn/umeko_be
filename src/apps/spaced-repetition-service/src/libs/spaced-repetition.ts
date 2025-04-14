export type ReviewResult = 'again' | 'hard' | 'easy';
export type LearningStatus = 'new' | 'learning' | 'mastered' | 'forgotten' | 'graduated';

export interface ReviewState {
  repetitionCount: number;
  interval: number;
  efFactor: number;
}

export interface NextReviewResult extends ReviewState {
  learningStatus: LearningStatus;
  reset: boolean; // true nếu reset do answer sai
}

export function calculateNextReview(
  quality: ReviewResult,
  state: ReviewState
): NextReviewResult {
  let { repetitionCount, interval, efFactor } = state;
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

  // Gán trạng thái học mới
  if (repetitionCount === 0) learningStatus = 'forgotten';
  else if (repetitionCount < 3) learningStatus = 'learning';
  else learningStatus = 'mastered'; // hoặc 'graduated' nếu muốn phân biệt

  return {
    repetitionCount,
    interval,
    efFactor,
    learningStatus,
    reset,
  };
}
