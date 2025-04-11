// detailed-weather.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailed-weather',
  imports: [CommonModule],
  templateUrl: './detailled-weather.component.html'
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