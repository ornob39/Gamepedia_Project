import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from '../review.model';
import { ReviewsService } from '../reviews.service';
@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss'],
})
export class ReviewCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';

  constructor(public reviewsService: ReviewsService) {}

  onAddReview(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const review: Review = {
      title: form.value.title,
      username: form.value.username,
      content: form.value.content,
      rating: form.value.rating,
    };

    this.reviewsService.addReview(
      form.value.title,
      form.value.username,
      form.value.content,
      form.value.rating
    );
  }

  ngOnInit(): void {}
}
