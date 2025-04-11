import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import {DetailedWeatherComponent} from './detailled-weather/detailled-weather.component';


@Component({
  selector: 'app-root',
  imports: [WeatherComponent,DetailedWeatherComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'weather-app';
}
