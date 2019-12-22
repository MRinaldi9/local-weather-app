import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import {
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule
} from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		BrowserAnimationsModule,
		FlexLayoutModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule
	],
	exports: [
		BrowserAnimationsModule,
		FlexLayoutModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule
	]
})
export class MaterialModule {}
