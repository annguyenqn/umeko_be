// libs/spaced-repetition.ts

export type ReviewResult = 'again' | 'hard' | 'easy';

export interface ReviewState {
  repetitionCount: number;
  interval: number;
  efFactor: number;
}

export function calculateNextReview(
  quality: ReviewResult,
  state: ReviewState
): ReviewState {
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

  if (q < 3) {
    repetitionCount = 0;
    interval = 1;
  } else {
    repetitionCount += 1;
    if (repetitionCount === 1) interval = 1;
    else if (repetitionCount === 2) interval = 6;
    else interval = Math.round(interval * efFactor);
  }

  efFactor = Math.max(1.3, efFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));

  return { repetitionCount, interval, efFactor };
}
