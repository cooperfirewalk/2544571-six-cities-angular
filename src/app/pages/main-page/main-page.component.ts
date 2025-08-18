import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OffersListComponent } from './offers-list/offers-list.component';
import { RouterLink } from '@angular/router';
import { LeafletMapComponent } from '../../shared/leaflet-map/leaflet-map.component';

@Component({
  selector: 'app-main-page',
  imports: [OffersListComponent, RouterLink, LeafletMapComponent],
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
}
