import { Component, computed, effect, inject, input } from '@angular/core';
import { OffersService } from '../../pages/offers.service';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { icon, IconOptions, Layer, marker } from 'leaflet';
import { latLng, tileLayer } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './leaflet-map.model';

const defaultCustomIcon: IconOptions = {
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
};

const currentCustomIcon: IconOptions = {
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
};
@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css'],
  standalone: true,
  imports: [LeafletModule]
})
export class LeafletMapComponent {
  constructor() {
    effect(() => {
      this.center = latLng([this.offersService.selectedCity()!.location.latitude, this.offersService.selectedCity()!.location.longitude])
      this.zoom = this.offersService.selectedCity()!.location.zoom
    }
    )
  }

  isFullOffer = input<boolean>(false);

  private offersService = inject(OffersService)
  offers = this.offersService.offers

  options = computed(() => ({ // опции видимо влияют только на ПЕРВУЮ отрисовку карты
    layers: [
      tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        })
    ],
    zoom: this.offersService.selectedCity()?.location.zoom,
    center: latLng(this.offersService.selectedCity()!.location.latitude, this.offersService.selectedCity()!.location.longitude)
  }));

  markers = computed<Layer[]>(() => this.offers().map((point) =>
    marker(
      [point.location.latitude, point.location.longitude],
      {
        icon: icon(point.id === this.offersService.markedOfferId() ? currentCustomIcon : defaultCustomIcon)
        // рандомное условие на выбор иконки для маркера
      })
  )
  )

  zoom = this.offersService.selectedCity()!.location.zoom
  center = latLng([
    this.offersService.selectedCity()!.location.latitude,
    this.offersService.selectedCity()!.location.longitude
  ])





}
