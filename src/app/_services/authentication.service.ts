/**
 * Created by mehdithreem on 2/8/17.
 */

import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService {
	constructor(private http: Http) {}

	login(username: string, password: string) : Promise<string> {
		localStorage.removeItem('activeUser');

		let params = new URLSearchParams();
		params.append('username', username);
		params.append('password', password);

		return this.http.post('http://localhost:8080/onsight/login', params)
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
		this.http.post('http://localhost:8080/onsight/logout', '');
	}
}
