import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from '../../services/open-weather/open-weather.service';
import { Weather } from '../../types/weather';
import { CityResponse } from '../../types/cities';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-temperature-infos',
  standalone: true,
  imports: [],
  templateUrl: './temperature-infos.component.html',
  styleUrl: './temperature-infos.component.css',
})
export class TemperatureInfosComponent implements OnInit {
  weather: Weather = { temperature: '', isRaining: false };
  selectedCity: CityResponse;
  constructor(private openWeatherService: OpenWeatherService) {}

  ngOnInit() {
    this.openWeatherService.selectedCity$
      .pipe(
        switchMap((value) => {
          this.selectedCity = value;
          return this.openWeatherService.getWeatherByCity(value);
        })
      )
      .subscribe((response) => (this.weather = response));
  }
}
