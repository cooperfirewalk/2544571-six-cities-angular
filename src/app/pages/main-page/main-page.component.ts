import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { OffersListComponent } from './offers-list/offers-list.component';
import { RouterLink } from '@angular/router';
import { LeafletMapComponent } from '../../shared/leaflet-map/leaflet-map.component';
import { OffersService } from '../offers.service';
import { CITIES, SortOption } from '../../app.model';

@Component({
  selector: 'app-main-page',
  imports: [OffersListComponent, RouterLink, LeafletMapComponent],
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  private offersService = inject(OffersService)
  citiesArray = CITIES
  isSortingOpen = signal<boolean>(false)
  sortingOpenToogle(needClose?: string) {
    if (needClose) {
      this.isSortingOpen.set(false)
      return
    }
    if (this.isSortingOpen()) {
      this.isSortingOpen.set(false)
      return
    }
    this.isSortingOpen.set(true)
  }

  onTabClick(cityName: string) {
    this.offersService.changeSelectedCity(cityName)
  }

  sortOption = SortOption
  activeSortOption = this.offersService.activeSortOption

  onSortClick(sortOption: SortOption) {
    switch (sortOption) {
      case SortOption.PriceHighToLow:
        this.offersService.activeSortOption.set(SortOption.PriceHighToLow)
        break
      case SortOption.PriceLowToHigh:
        this.offersService.activeSortOption.set(SortOption.PriceLowToHigh)
        break
      case SortOption.TopRatedFirst:
        this.offersService.activeSortOption.set(SortOption.TopRatedFirst)
        break
      default:
        this.offersService.activeSortOption.set(SortOption.Popular)
    }
  }
}
