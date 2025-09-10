import { computed, Injectable, signal } from '@angular/core';

import { offers } from '../../mocks/offers';
import { CITIES, City , SortOption} from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  selectedCity = signal<City | undefined>(CITIES[0]);
  markedOfferId = signal<string>('');

  activeSortOption = signal<SortOption>(SortOption.Popular)

  changeSelectedCity(cityName: string) {
    this.selectedCity.set(
      CITIES.find((city) => city.name === cityName)
    )
  }

  offers = computed(() => offers.filter((offer) => offer.city.name === this.selectedCity()?.name))
  // get offers() {
  //   return offers.filter((offer) => offer.city.name === this.selectedCity()?.name);;
  // }
}
