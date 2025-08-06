import { Injectable } from '@angular/core';

import { offers } from '../../mocks/offers';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get offers() {
    return offers;
  }
}
