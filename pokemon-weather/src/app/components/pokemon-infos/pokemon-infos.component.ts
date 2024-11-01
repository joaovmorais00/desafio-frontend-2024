import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from '../../services/open-weather/open-weather.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Weather } from '../../types/weather';
import { PokeapiService } from '../../services/pokeapi/pokeapi.service';
import { Pokemon } from '../../types/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-infos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-infos.component.html',
  styleUrl: './pokemon-infos.component.css',
})
export class PokemonInfosComponent implements OnInit {
  pokemonTypePortuguese: { [key: string]: string } = {
    ice: 'gelo',
    water: 'água',
    grass: 'grama',
    ground: 'terra',
    bug: 'inseto',
    rock: 'pedra',
    fire: 'fogo',
    normal: 'normal',
    electric: 'elétrico',
  };

  pokemon: Pokemon = {
    name: '',
    url: '',
  };

  pokemonImage: string = '';

  pokemonType$ = new BehaviorSubject<string>('');
  pokemonType: string = '';

  constructor(
    private openWeatherService: OpenWeatherService,
    private pokeapi: PokeapiService
  ) {}

  ngOnInit() {
    this.openWeatherService.weatherFromCity$.subscribe((weather) => {
      this.pokemonType = !!weather.temperature
        ? weather.isRaining
          ? 'electric'
          : this.typeOfPokemon(+weather.temperature)
        : '';
      this.pokemonType$.next(this.pokemonType);
    });

    this.pokemonType$
      .pipe(
        switchMap((type) => {
          return this.pokeapi.getPokemonByType(type, this.pokemon.name);
        })
      )
      .pipe(
        switchMap((newPokemon) => {
          this.pokemon = newPokemon;
          return this.pokeapi.getPokemonImage(newPokemon.url);
        })
      )
      .subscribe((newPokemonImage) => (this.pokemonImage = newPokemonImage));
  }

  typeOfPokemon(temperature: number) {
    if (temperature < 5) return 'ice';
    else if (temperature < 10) return 'water';
    else if (temperature >= 12 && temperature < 15) return 'grass';
    else if (temperature < 21) return 'ground';
    else if (temperature >= 23 && temperature < 27) return 'bug';
    else if (temperature <= 33) return 'rock';
    else if (temperature > 33) return 'fire';
    else return 'normal';
  }

  firstLetterUpperCase(text: string) {
    return text[0].toUpperCase() + text.substring(1);
  }
}
