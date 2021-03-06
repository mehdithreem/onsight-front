import {OnInit, Component} from "@angular/core";
import {AuthenticationService} from "../_services/authentication.service";
import {Router, ActivatedRoute} from "@angular/router";
/**
 * Created by mehdithreem on 2/8/17.
 */

@Component({
	moduleId: module.id,
	selector: "ons-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]

})

export class LoginComponent implements OnInit {
	username: string;
	password: string;
	errorMessage: string = "";
	loading = false;
	returnUrl: string;

	constructor(
		private authentication : AuthenticationService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.authentication.logout();

		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	login() {
		this.loading = true;

		this.authentication.login(this.username, this.password)
			.then(message => {
				if(localStorage.getItem('activeUser')) {
					this.router.navigate([this.returnUrl]);
				} else {
					// TODO: Remove this
					console.log(message);
					this.errorMessage = message;
					this.password = "";
				}
			});
	}

}
