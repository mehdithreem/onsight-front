
import {Component} from "@angular/core";
import {User} from "../_modules/user";
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";

@Component({
	moduleId: module.id,
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent {
	user: User = new User("","","");
	password: string;
	password2: string;
	errorMessage: string;

	constructor(
		private authentication: AuthenticationService,
		private router: Router
	) {}

	signup() {
		this.authentication.signup(this.user, this.password)
			.then(message =>{
				if (message === true)
					this.router.navigate(['/login']);
				else {
					this.errorMessage = message.toString();
				}
			});
	}
}
