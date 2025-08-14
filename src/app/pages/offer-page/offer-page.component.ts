import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReviewFormComponent } from './review-form/review-form.component';

@Component({
  selector: 'app-offer-page',
  imports: [RouterLink, ReviewFormComponent],
  standalone: true,
  templateUrl: './offer-page.component.html',
  styleUrl: './offer-page.component.css'
})
export class OfferPageComponent {

}
