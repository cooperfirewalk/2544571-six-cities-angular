import { Component, computed, inject } from '@angular/core';
import { OffersService } from '../offers.service';
import { CardComponent } from '../../shared/card/card.component';
import { CardClass } from '../../shared/card/card.model';

@Component({
  selector: 'app-favorites-page',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.css'
})
export class FavoritesPageComponent {
  cardClass = CardClass
  private offersService = inject(OffersService)
  offers = this.offersService.offers
  uniqueCities = computed(() => {
    const array:string[] = []
    this.offers.forEach((element) => {
      if (element.city.name !== array[array.length - 1]) {
        array.push(element.city.name);
      }
    }
  )
  return array
  })
}
