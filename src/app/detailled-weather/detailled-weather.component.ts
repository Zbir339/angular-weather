// detailed-weather.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailed-weather',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card mt-3" *ngIf="weatherData">
      <div class="card-header bg-info text-white">
        <h3>Detailed Weather Information</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <p><strong>Feels Like:</strong> {{weatherData.main?.feels_like}}°C</p>
            <p><strong>Min Temp:</strong> {{weatherData.main?.temp_min}}°C</p>
            <p><strong>Max Temp:</strong> {{weatherData.main?.temp_max}}°C</p>
          </div>
          <div class="col-md-6">
            <p><strong>Wind Direction:</strong> {{getWindDirection(weatherData.wind?.deg)}}</p>
            <p><strong>Sunrise:</strong> {{formatTime(weatherData.sys?.sunrise)}}</p>
            <p><strong>Sunset:</strong> {{formatTime(weatherData.sys?.sunset)}}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DetailedWeatherComponent {
  @Input() weatherData: any;
  
  getWindDirection(degrees: number): string {
    if (!degrees) return 'Unknown';
    
    const directions = ['North', 'NE', 'East', 'SE', 'South', 'SW', 'West', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  }
  
  formatTime(timestamp: number): string {
    if (!timestamp) return 'Unknown';
    
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}