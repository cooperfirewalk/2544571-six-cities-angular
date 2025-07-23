import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPageComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  offersCount = 312;
  title = 'angular-template-project';
}
