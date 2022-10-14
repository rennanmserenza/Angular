import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './login/auth.service';

import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.auth.guard';
import { AlunosGuard } from './alunos/guards/alunos.auth.guard';

@NgModule({
	declarations: [AppComponent, LoginComponent, HomeComponent],
	imports: [BrowserModule, NgbModule, FormsModule, AppRoutingModule],
	providers: [AuthService, AuthGuard, CursosGuard, AlunosGuard],
	bootstrap: [AppComponent],
})
export class AppModule {}
