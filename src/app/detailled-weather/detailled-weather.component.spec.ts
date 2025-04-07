import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailledWeatherComponent } from './detailled-weather.component';

describe('DetailledWeatherComponent', () => {
  let component: DetailledWeatherComponent;
  let fixture: ComponentFixture<DetailledWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailledWeatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailledWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
