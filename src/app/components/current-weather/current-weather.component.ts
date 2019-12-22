import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from 'src/app/interfaces/icurrent-weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
	selector: 'app-current-weather',
	templateUrl: './current-weather.component.html',
	styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
	current: ICurrentWeather;
	constructor(private weatherService: WeatherService) {}

	ngOnInit() {
		this.weatherService
			.getCurrentWeather('Rome', 'Italy')
			.subscribe(data => (this.current = data));
	}

	getOrdinal(date: number) {
		const d = new Date(date).getDate();
		return d > 0
			? ['th', 'st', 'nd', 'rd'][(d > 3 && d < 21) || d % 10 > 3 ? 0 : d % 10]
			: '';
	}
}
