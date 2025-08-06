import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { OfferPageComponent } from './pages/offer-page/offer-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { inject } from '@angular/core';

const mockIsAuth = true

const mockCanMatch: CanMatchFn = () => {
  if(mockIsAuth) {
    return true
  }
  const router = inject(Router)
  return new RedirectCommand(router.parseUrl('login'))
}

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
    canMatch: [mockCanMatch]
  },
  {
    path: 'offer/:id',
    component: OfferPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
