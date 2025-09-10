import { Pipe, PipeTransform } from '@angular/core';
import { SortOption } from '../../app.model';
import { Offer } from '../../app.model';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: Offer[], sortType: SortOption) {
    let sortedOffers = [...value]
  if (sortType === SortOption.PriceLowToHigh) {
    sortedOffers.sort((a: Offer, b: Offer) => a.price - b.price);
  }
  if (sortType === SortOption.PriceHighToLow) {
    sortedOffers.sort((a: Offer, b: Offer) => b.price - a.price);
  }
  if (sortType === SortOption.TopRatedFirst) {
    sortedOffers.sort((a: Offer, b: Offer) => b.rating - a.rating);
  }
  if (sortType === SortOption.Popular) {
    sortedOffers = [...value]
  }
    return sortedOffers;
  }
}
