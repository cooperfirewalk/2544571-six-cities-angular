import { Component, inject} from '@angular/core';
import { OffersService } from '../../offers.service';
import { CardComponent } from '../../../shared/card/card.component';
import { CardClass } from '../../../shared/card/card.model';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-offers-list',
  imports: [CardComponent, SortPipe],
  standalone: true,
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css'
})
export class OffersListComponent {
  private offersService = inject(OffersService)
  offers = this.offersService.offers
  cardClass = CardClass
  activeSortOption = this.offersService.activeSortOption
  // activeSortOption = signal<SortOption>(SortOption.Popular)

  onMouseEnter(id: string) {
    this.offersService.markedOfferId.set(id)
  }

  onMouseLeave() {
    this.offersService.markedOfferId.set('')
  }
}
