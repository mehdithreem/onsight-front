/**
 * Created by mehdithreem on 2/11/17.
 */

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../_modules/user";
import {UserService} from "../_services/user.service";

declare let jQuery: any;

@Component({
	moduleId: module.id,
	templateUrl: './home.component.html',
	providers: [UserService],
})

export class HomeComponent implements OnInit {
	unconfirmedUsers: User[];
	currUser: User;

	constructor(
		private userService: UserService,
		private router: Router
	) {}

	ngOnInit() {
		this.userService.getUserDetail()
			.then(user => {
				this.currUser = user;
				console.log(this.currUser);});
		this.userService.getUnconfirmedUsers()
			.then(users => {
				this.unconfirmedUsers = users;
			});
	}

	logout() {
		this.router.navigate(['/login']);
	}

	rejectUser(username: string) {
		this.userService.rejectUser(username)
			.then(result => {
				if (result) {
					this.unconfirmedUsers = this.unconfirmedUsers.filter(u => u.username != username);
				}
			});
	}

	acceptUser(username: string, isAdmin: boolean) {
		this.userService.acceptUser(username, isAdmin)
			.then(result => {
				if (result) {
					this.unconfirmedUsers = this.unconfirmedUsers.filter(u => u.username != username);
				}
			});
	}
}
