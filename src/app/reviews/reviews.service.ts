import { Injectable } from '@angular/core';
import { Review } from './review.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor() {}

  private reviews: Review[] = [];
  private reviewsUpdated = new Subject<Review[]>();

  getReviews() {
    return [...this.reviews];
  }

  getReviewUpdateListener() {
    return this.reviewsUpdated.asObservable();
  }

  addReview(title: string, username: string, content: string, rating: number) {
    const review: Review = {
      title: title,
      username: username,
      content: content,
      rating: rating,
    };
    this.reviews.push(review);
    this.reviewsUpdated.next([...this.reviews]);
  }
}
