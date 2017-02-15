import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "../_modules/user";
import 'rxjs/add/operator/map';
/**
 * Created by mehdithreem on 2/8/17.
 */

@Injectable()
export class UserService {
	constructor(private http : Http) { }

	getUserDetail(): Promise<User> {
		return this.http
			.get('/onsight/user_info', { withCredentials: true })
			.toPromise()
			.then(response => {
				console.log("user info");
				console.log(response.json().userInfo as User);
				return response.json().userInfo as User;
			})
			.catch(err => {
				console.log(err);
				return new User("error", "error", "error");
			});
	}

	getUnconfirmedUsers(): Promise<User[]> {
		return this.http
			.get('/onsight/unconfirmed_users', { withCredentials: true })
			.toPromise()
			.then(response => {
				return response.json().unconfirmedUsers as User[];
			});
	}

	rejectUser(username: string): Promise<boolean> {
		let params = new URLSearchParams();
		params.append('username', username);
		params.append('status', 'reject');
		params.append('roles', 'user');

		return this.http
			.post('/onsight/specify_user_status','', {search: params})
			.toPromise()
			.then(response => {
				return response.json().result;
			})
			.catch(err => false);
	}

	acceptUser(username: string, isAdmin: boolean): Promise<boolean> {
		let params = new URLSearchParams();
		params.append('username', username);
		params.append('status', 'confirm');
		params.append('roles', isAdmin ? 'admin' : 'user');

		return this.http
			.post('/onsight/specify_user_status', '', { search: params })
			.toPromise()
			.then(response => {
				return response.json().result;
			})
			.catch(err => false);
	}
}
