import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from 'src/app/interfaces/icurrent-weather';

@Component({
	selector: 'app-current-weather',
	templateUrl: './current-weather.component.html',
	styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
	current: ICurrentWeather;
	constructor() {
		this.current = {
			city: 'Rome',
			country: 'Italy',
			date: new Date(),
			description: 'sunny',
			image:
				'../../../assets/1-10459_transparent-sun-png-clip-art-image-sun-image.png',
			temperature: 34
		};
	}

	ngOnInit() {}
}
