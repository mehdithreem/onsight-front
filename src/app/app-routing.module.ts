/**
 * Created by mehdithreem on 2/11/17.
 */

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: 'signup', component: SignupComponent, data: { title: 'Create Account | OnSight'}},
	{path: 'home', component: HomeComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	// {path: '**', component: PageNotFound}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
})

export class AppRoutingModule {}
