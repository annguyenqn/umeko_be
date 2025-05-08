import { Review } from "@/reviews/schemas/review.schema";
export interface InitReviewsResult {
    inserted: number;
    skipped: number;
    total: number;
  }


export interface ReviewManyResult {
  updated: number;
  total: number;
  skipped: number;
  failedVocabIds: string[];
  reviews: Review[]; 
}
