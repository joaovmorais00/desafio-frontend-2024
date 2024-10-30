import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { PokemonInfosComponent } from './components/pokemon-infos/pokemon-infos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CitySearchComponent, PokemonInfosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pokemon-weather';
  constructor() {}
}
