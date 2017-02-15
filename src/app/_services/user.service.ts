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

	getUserDetail(username: string): Promise<User> {
		return this.http
			.get('http://localhost:8080/onsight/user_info', { withCredentials: true })
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
			.get('http://localhost:8080/onsight/unconfirmed_users', { withCredentials: true })
			.map(response => {
				console.log(response);
				return response.json().unconfirmedUsers as User[];
			});
	}
}
