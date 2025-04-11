import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from '../weather.service';
import { DetailedWeatherComponent } from '../detailled-weather/detailled-weather.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule, DetailedWeatherComponent, MapComponent],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  temp: any;
  pression: any;
  humidite: any;
  country: any;
  weatherData: any;
  cityName: string = '';
  displayedCity: string = '';
  showDetails: boolean = false;
  weatherIcon: string = '';
  lat: number = 0;
  lon: number = 0;
  darkMode: boolean = false;

  userInput: string = '';
  frozenMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  getTempClass(temp: number): string {
    if (temp < 10) return 'bg-primary-subtle';
    if (temp >= 10 && temp < 25) return 'bg-warning-subtle';
    return 'bg-danger-subtle';
  }

  getWeatherData(): void {

    if (!this.cityName.trim()) {
      alert('Please enter a city name');
      return;
    }

    this.weatherService.getWeatherByCity(this.cityName).subscribe({
      next: (data: any) => {

        console.log(data);
        this.weatherData = data;
        this.displayedCity = this.cityName;
        this.lat = data.coord?.lat;
        this.lon = data.coord?.lon;

        if (data.sys && data.sys.country) {
          this.country = data.sys.country === 'EH' ? 'MA' : data.sys.country;
        }

        this.temp = data.main?.temp;
        this.pression = data.main?.pressure;
        this.humidite = data.main?.humidity;

        if (data.weather && data.weather[0]) {
          this.weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        }
      },
      error: (err) => {
        console.log(err);
        alert('City not found or error fetching weather data');
      }
    });
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }


  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    const body = document.body;

    if (this.darkMode) {
      body.classList.add('bg-dark', 'text-white');
    } else {
      body.classList.remove('bg-dark', 'text-white');
    }
  }





  getCountryFlag(countryCode: string): string {
    return `https://flagsapi.com/${countryCode}/shiny/64.png`;
  }
}
