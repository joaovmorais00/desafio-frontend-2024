import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { PokemonInfosComponent } from './components/pokemon-infos/pokemon-infos.component';
import { TemperatureInfosComponent } from './components/temperature-infos/temperature-infos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CitySearchComponent,
    PokemonInfosComponent,
    TemperatureInfosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pokemon-weather';
  actualYear = new Date().getFullYear();
  constructor() {}
}
