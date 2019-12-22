import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from './material/material.module';
import { registerLocaleData } from '@angular/common';
import localeIT from '@angular/common/locales/it';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitySearchComponent } from './components/city-search/city-search.component';

registerLocaleData(localeIT);
@NgModule({
	declarations: [AppComponent, CurrentWeatherComponent, SideNavComponent, CitySearchComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [{ provide: LOCALE_ID, useValue: 'it' }],
	bootstrap: [AppComponent]
})
export class AppModule {}
