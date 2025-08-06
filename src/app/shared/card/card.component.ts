import { Component, computed, input } from '@angular/core';
import { Offer } from '../../app.model';
import { CommonModule } from '@angular/common';
import { CardClass } from './card.model';

const STARS_STYLE_COEFF = 20;

@Component({
  selector: 'article[app-card]',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  offer = input.required<Offer>()
  cardClass = input.required<CardClass>()
  starsStyle = computed(() => 'width:' + Math.round(this.offer().rating * STARS_STYLE_COEFF ) + '%')
  computedHeight = computed((() => this.cardClass() === CardClass.Favorites ? '110' : '200'))
  computedWidth = computed((() => this.cardClass() === CardClass.Favorites ? '150' : '260'))

}
