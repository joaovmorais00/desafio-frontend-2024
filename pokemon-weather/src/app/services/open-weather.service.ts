import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityResponse } from '../types/cities';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  private baseUrl = 'http://api.openweathermap.org/';
  private citiesUrl = `${this.baseUrl}geo/1.0/direct?appid=${environment.openweathermap_key}&`;
  private temperatureUrl = `${this.baseUrl}data/2.5/weather?appid=${environment.openweathermap_key}&units=metric&`;
  private limitResults = '5';

  constructor(private http: HttpClient) {}

  getCities(query: string): Observable<CityResponse[]> {
    return this.http.get<CityResponse[]>(
      `${this.citiesUrl}q=${query}&limit=${this.limitResults}`
    );
  }

  getTemperatureByCity(city: CityResponse): Observable<any> {
    return this.http.get<any[]>(
      `${this.temperatureUrl}lat=${city.lat}&lon=${city.lon}`
    );
  }
}
