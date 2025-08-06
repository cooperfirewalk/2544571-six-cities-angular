import { Component, inject } from '@angular/core';
import { OffersService } from '../../offers.service';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-offers-list',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css'
})
export class OffersListComponent {
  private offersService = inject(OffersService)
  offers = this.offersService.offers
}
