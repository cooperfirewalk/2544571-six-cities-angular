import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OffersListComponent } from './offers-list/offers-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [OffersListComponent, RouterLink],
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
}
