import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { Pokemon } from '../../types/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private pokeapiUrl: string = 'https://pokeapi.co/api/v2/type/';

  constructor(private http: HttpClient) {}

  getPokemonByType(type: string, pokemonName: string): Observable<Pokemon> {
    if (!!type) {
      return this.http.get(`${this.pokeapiUrl}${type}`).pipe(
        map((response: any) => {
          let randomIndex;
          let randomPokemon;
          do {
            randomIndex = Math.floor(Math.random() * response?.pokemon?.length);
            randomPokemon = response?.pokemon[randomIndex]?.pokemon;
          } while (randomPokemon.name === pokemonName);

          return {
            name: randomPokemon.name,
            url: randomPokemon.url,
          };
        }),
        catchError(() => of({ name: '', url: '' }))
      );
    } else {
      return of({ name: '', url: '' });
    }
  }

  getPokemonImage(pokemonUrl: string): Observable<string> {
    if (!!pokemonUrl) {
      return this.http.get(pokemonUrl).pipe(
        map((response: any) => {
          let dreamWorldUrl =
            response?.sprites?.other?.dream_world?.front_default;

          let frontDefaultUrl = response?.sprites?.front_default;

          let imageUrl = dreamWorldUrl
            ? dreamWorldUrl
            : frontDefaultUrl
            ? frontDefaultUrl
            : '';

          return imageUrl;
        })
      );
    } else {
      return of('');
    }
  }
}
