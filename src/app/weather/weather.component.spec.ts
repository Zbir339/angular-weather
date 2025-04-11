import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
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
  
  constructor(private weatherService: WeatherService) {}

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
        
        // Get country from the weather API
        if (data.sys && data.sys.country) {
          this.country = data.sys.country === 'EH' ? 'MA' : data.sys.country;
        }
        
        // Get temperature, pressure and humidity
        this.temp = data.main?.temp;
        this.pression = data.main?.pressure;
        this.humidite = data.main?.humidity;
        
        // Get weather icon
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
  
  getCountryFlag(countryCode: string): string {
    return `https://flagsapi.com/${countryCode}/shiny/64.png`;
  }
}