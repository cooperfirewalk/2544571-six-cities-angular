import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReviewFormComponent } from './review-form/review-form.component';
import { LeafletMapComponent } from "../../shared/leaflet-map/leaflet-map.component";

@Component({
  selector: 'app-offer-page',
  imports: [RouterLink, ReviewFormComponent, LeafletMapComponent],
  standalone: true,
  templateUrl: './offer-page.component.html',
  styleUrl: './offer-page.component.css'
})
export class OfferPageComponent {

}
