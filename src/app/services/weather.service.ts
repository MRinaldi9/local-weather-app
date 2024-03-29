import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICurrentWeather } from '../interfaces/icurrent-weather';
import { ICurrentWeatherData } from '../interfaces/icurrent-weather-data';
import { IWeatherService } from '../interfaces/iweather-service';

@Injectable({
	providedIn: 'root'
})
export class WeatherService implements IWeatherService {
	constructor(private httpClient: HttpClient) {}

	getCurrentWeather(
		city: string,
		country: string
	): Observable<ICurrentWeather> {
		return this.httpClient
			.get<ICurrentWeatherData>(
				`${environment.baseUrl}api.openweathermap.org/data/2.5/weather?q=${city},${country}` +
					`&appid=${environment.appId}`
			)
			.pipe(map(data => this.transformToICurrentWeather(data)));
	}

	private transformToICurrentWeather(
		data: ICurrentWeatherData
	): ICurrentWeather {
		return {
			city: data.name,
			country: data.sys.country,
			date: data.dt * 1000,
			image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
			temperature: this.kelvinToCelsius(data.main.temp),
			description: data.weather[0].description
		};
	}
	private kelvinToCelsius(temp: number) {
		return temp - 273.15;
	}
}
