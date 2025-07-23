import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  standalone: true,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  @Input({required: true}) offersCount!: number
}
