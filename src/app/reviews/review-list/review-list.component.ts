import { Component, OnInit, OnDestroy } from '@angular/core';
import { Review } from '../review.model';
import { ReviewsService } from '../reviews.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent implements OnInit, OnDestroy {
  reviews: Review[] = [];
  private reviewSub: Subscription;

  reviewService: ReviewsService;
  constructor(public reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.reviews = this.reviewsService.getReviews();
    this.reviewSub = this.reviewService
      .getReviewUpdateListener()
      .subscribe((reviews: Review[]) => {
        this.reviews = reviews;
      });
  }
  ngOnDestroy(): void {
    // this.reviewSub.unsubscribe();
  }
}
