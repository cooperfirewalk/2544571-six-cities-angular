import { Component, inject } from '@angular/core';
import { OffersService } from '../../pages/offers.service';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { icon, IconOptions, Layer, marker } from 'leaflet';
import { latLng, tileLayer } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './leaflet-map.model';
import { CITIES } from '../../app.model';

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
  selector: '[app-leaflet-map]',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css'],
  standalone: true,
  imports: [LeafletModule]
})
export class LeafletMapComponent {
  private offersService = inject(OffersService)
  offers = this.offersService.offers

  options = {
    layers: [
      tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        })
    ],
    zoom: CITIES[0].location.zoom,
    center: latLng(CITIES[0].location.latitude, CITIES[0].location.longitude)
  };

  markers: Layer[] = this.offers().map((point) =>
      marker(
      [point.location.latitude, point.location.longitude],
      {
        icon: icon(point.city.name === 'Paris'? defaultCustomIcon: currentCustomIcon)
        // рандомное условие на выбор иконки для маркера
      }) )
}
