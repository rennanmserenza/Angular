import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		CursosComponent,
	],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
