import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import {DetailedWeatherComponent} from './detailled-weather/detailled-weather.component';
import { MapComponent } from './map/map.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent,DetailedWeatherComponent,MapComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'weather-app';
}
