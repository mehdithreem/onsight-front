/**
 * Created by mehdithreem on 2/8/17.
 */

import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {User} from "../_modules/user";

@Injectable()
export class AuthenticationService {
	constructor(private http: Http) {}

	login(username: string, password: string) : Promise<string> {
		localStorage.removeItem('activeUser');

		let params = new URLSearchParams();
		params.append('username', username);
		params.append('password', password);

		return this.http
			.post('/onsight/login', '',{ search: params} )
			.toPromise()
			.then((response: Response) => {
				let resp = response.json();
				if (!resp.result) {
					return resp.message;
				}
				localStorage.setItem('activeUser', username);
			})
			.catch(error => {
				//TODO: do something for errors
				return "An error occurred.";
			});
	}

	logout() {
		localStorage.removeItem('activeUser');
		this.http.post('/onsight/logout', '');
	}

	signup(user: User, password: string): Promise<string|boolean> {
		let params = new URLSearchParams();

		params.append('username', user.username);
		params.append('password', password);
		params.append('name', user.name);
		params.append('family', user.family);

		return this.http
			.post('/onsight/signup', '', { search: params})
			.toPromise()
			.then(response => {
				if (response.json().result)
					return true;
				else
					return response.json().message;
			});
	}
}
