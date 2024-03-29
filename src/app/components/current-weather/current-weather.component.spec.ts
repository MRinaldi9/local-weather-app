import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherFakeService } from 'src/app/weather/weather.service.fake';

describe('CurrentWeatherComponent', () => {
	let component: CurrentWeatherComponent;
	let fixture: ComponentFixture<CurrentWeatherComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CurrentWeatherComponent],
			providers: [{ provide: WeatherService, useClass: WeatherFakeService }]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CurrentWeatherComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
