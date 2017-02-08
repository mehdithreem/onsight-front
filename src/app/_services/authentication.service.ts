/**
 * Created by mehdithreem on 2/8/17.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService {
	constructor(private http: Http) {}

	login(username: string, password: string) : Promise<string> {
		return this.http.post('/login', JSON.stringify({username: username, password: password}))
			.toPromise()
			.then((response: Response) => {
				let resp = response.json();
				if (resp.result === 'false') {
					return resp.message;
				}
				localStorage.setItem('activeUser', username);
			})
			.catch(error => {
				//TODO: do something for errors
				return "An error occurred.";
			});
	}
}
