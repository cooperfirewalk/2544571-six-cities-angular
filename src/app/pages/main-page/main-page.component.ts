import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OfferComponent } from './offer/offer.component';

@Component({
  selector: 'app-main-page',
  imports: [OfferComponent],
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
  @Input({required: true}) offersCount!: number
}
