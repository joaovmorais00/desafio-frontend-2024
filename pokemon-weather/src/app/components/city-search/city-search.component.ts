import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OpenWeatherService } from '../../services/open-weather/open-weather.service';
import { CityResponse } from '../../types/cities';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
})
export class CitySearchComponent implements OnInit {
  searchCityInput = new FormControl('');
  options: Observable<CityResponse[]>;
  constructor(private openWeatherService: OpenWeatherService) {}

  ngOnInit() {
    this.options = this.searchCityInput.valueChanges.pipe(
      switchMap((inputValue) => {
        return this.openWeatherService.getCities(inputValue ?? '').pipe(
          catchError((err) => {
            return of([]);
          })
        );
      })
    );
  }
  onSelectionChanged(option: CityResponse): void {
    this.searchCityInput.setValue(
      `${option.name} - ${option.state}(${option.country})`
    );
    this.openWeatherService.updateSelectedCity(option);
  }
}
