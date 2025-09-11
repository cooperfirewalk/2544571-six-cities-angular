import { Component, inject, Signal} from '@angular/core';
import { OffersService } from '../../offers.service';
import { CardComponent } from '../../../shared/card/card.component';
import { CardClass } from '../../../shared/card/card.model';

import { Offer } from '../../../app.model';

@Component({
  selector: 'app-near-offers-list',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './near-offers-list.component.html',
  styleUrl: './near-offers-list.component.css'
})
export class OffersListComponent {
  private offersService = inject(OffersService)
  offers: Signal<Offer[]> = this.offersService.offers
  cardClass = CardClass
}
