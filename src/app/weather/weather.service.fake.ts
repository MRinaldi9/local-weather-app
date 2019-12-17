import { Observable, of } from 'rxjs';
import { IWeatherService } from '../interfaces/iweather-service';
import { ICurrentWeather } from '../interfaces/icurrent-weather';

export class WeatherFakeService implements IWeatherService {
	private fakeWeather: ICurrentWeather = {
		city: 'Rome',
		country: 'Italy',
		date: 1485789600,
		image: '',
		description: 'light intensity drizzle',
		temperature: 280.32
	};
	getCurrentWeather(
		city: string,
		country: string
	): Observable<ICurrentWeather> {
		return of(this.fakeWeather);
	}
}
