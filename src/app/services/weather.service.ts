import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'f5a8495fd7cabcca9d5740239650ecc8';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }

  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
    );
  }

  getDetailedWeather(lat: number, lon: number): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
    );
  }
  

}
