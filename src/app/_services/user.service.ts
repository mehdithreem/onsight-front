import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
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
				console.log(response);
				return response.json().userInfo as User;
			})
			.catch(err => {
				console.log(err);
				return new User("error", "error", "error");
			});
	}

	getUnconfirmedUsers(): Observable<User[]> {
		return this.http
			.get('/onsight/unconfirmed_users', { withCredentials: true })
			.map(response => {
				console.log(response);
				return response.json().unconfirmedUsers as User[];
			});
	}
}
