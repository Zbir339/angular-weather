import { Component, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  template: `<div id="map" style="height: 400px; border-radius: 10px;"></div>`,
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit, OnChanges {
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;
  private map: L.Map | undefined;

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['latitude'] || changes['longitude']) {
      if (this.map) {
        this.map.setView([this.latitude, this.longitude], 10);
        L.marker([this.latitude, this.longitude]).addTo(this.map)
          .bindPopup('Weather Location')
          .openPopup();
      }
    }
  }

  private initMap(): void {
    this.map = L.map('map').setView([this.latitude, this.longitude], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([this.latitude, this.longitude]).addTo(this.map)
      .bindPopup('Weather Location')
      .openPopup();
  }
}
