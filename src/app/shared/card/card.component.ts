import { Component, computed, input } from '@angular/core';
import { Offer } from '../../app.model';
import { CommonModule } from '@angular/common';

const STARS_STYLE_COEFF = 20;

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  offer = input.required<Offer>()
  starsStyle = computed(() => 'width:' + Math.round(this.offer().rating * STARS_STYLE_COEFF ) + '%')

}
