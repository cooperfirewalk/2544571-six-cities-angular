import { Component } from '@angular/core';
import { ReviewItemComponent } from "./review-item/review-item.component";

@Component({
  selector: 'app-reviews-list',
  imports: [ReviewItemComponent],
  standalone: true,
  templateUrl: './reviews-list.component.html',
  styleUrl: './reviews-list.component.css'
})
export class ReviewsListComponent {

}
