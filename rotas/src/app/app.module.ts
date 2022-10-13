import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './login/auth.service';

@NgModule({
	declarations: [AppComponent, LoginComponent, HomeComponent],
	imports: [BrowserModule, NgbModule, FormsModule, AppRoutingModule],
	providers: [AuthService],
	bootstrap: [AppComponent],
})
export class AppModule {}
