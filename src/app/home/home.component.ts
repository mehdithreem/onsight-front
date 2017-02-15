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
	list: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	unconfirmedUsers: Observable<User[]>;
	currUser: User;

	constructor(
		private userService: UserService,
		private router: Router
	) {}

	ngOnInit() {
		this.unconfirmedUsers = this.userService.getUnconfirmedUsers();
		this.userService.getUserDetail(localStorage.getItem('activeUser')).then(user => {this.currUser = user;});
	}

	logout() {
		this.router.navigate(['/login']);
	}
}
