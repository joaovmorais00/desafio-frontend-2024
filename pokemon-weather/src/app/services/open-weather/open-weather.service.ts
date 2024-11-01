import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { CityResponse } from '../../types/cities';
import { environment } from '../../../environments/environment';
import { Weather } from '../../types/weather';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  private baseUrl = 'http://api.openweathermap.org/';
  private citiesUrl = `${this.baseUrl}geo/1.0/direct?appid=${environment.openweathermap_key}&`;
  private weatherUrl = `${this.baseUrl}data/2.5/weather?appid=${environment.openweathermap_key}&units=metric&lang=pt_br&`;
  private limitResults = '5';
  private selectedCity = new BehaviorSubject<CityResponse>({
    name: '',
    lat: '',
    lon: '',
  });
  selectedCity$ = this.selectedCity.asObservable();

  constructor(private http: HttpClient) {}

  updateSelectedCity(city: CityResponse) {
    this.selectedCity.next(city);
  }

  getCities(query: string): Observable<CityResponse[]> {
    return this.http.get<CityResponse[]>(
      `${this.citiesUrl}q=${query}&limit=${this.limitResults}`
    );
  }

  getWeatherByCity(city: CityResponse | null): Observable<Weather> {
    if (city) {
      return this.http
        .get(`${this.weatherUrl}lat=${city.lat}&lon=${city.lon}`)
        .pipe(
          map((response: any) => {
            return {
              temperature: response?.main?.temp
                ? response?.main?.temp.toFixed(0)
                : '',
              isRaining: response?.weather[0]?.main === 'Rain',
            };
          }),
          catchError(() => of({ temperature: '', isRaining: false }))
        );
    } else {
      return of({ temperature: '', isRaining: false });
    }
  }
}
