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
