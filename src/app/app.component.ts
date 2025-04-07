import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import {DetailedWeatherComponent} from './detailled-weather/detailled-weather.component';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent,DetailedWeatherComponent,MapComponent],
  template: `
    <div class="container">
      <h1 class="text-center mt-4">Weather App</h1>
      <app-weather></app-weather>
    </div>
  `
})
export class AppComponent {
  title = 'weather-app';
}
