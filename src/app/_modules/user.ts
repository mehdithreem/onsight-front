/**
 * Created by mehdithreem on 2/8/17.
 */

import { UserRole } from './UserRole';

export class User {
	constructor(username: string, name: string, family: string) {
		this.username = username;
		this.name = name;
		this.family = family;
	}
	username: string;
	name: string;
	family: string;
	roles: UserRole;
}
