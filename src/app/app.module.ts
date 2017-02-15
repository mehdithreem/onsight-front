import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {AuthenticationService} from "./_services/authentication.service";
import {AppRoutingModule} from "./app-routing.module";
// import {NgSemanticModule} from "ng-semantic";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";

@NgModule({
  declarations: [
	  AppComponent,
	  LoginComponent,
	  SignupComponent,
	  HomeComponent
  ],
  imports: [
	  BrowserModule,
	  FormsModule,
	  HttpModule,
	  // NgSemanticModule,
	  AppRoutingModule
  ],
  providers: [
	  AuthenticationService
  ],
  bootstrap: [AppComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
