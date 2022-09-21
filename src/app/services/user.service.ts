import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, take } from 'rxjs'
import { environment } from 'src/environments/environment'
import { GenericSubscribe } from '../interfaces/default'
import { JSONResponse } from '../interfaces/json.interface'
import { IUser } from '../interfaces/users.interface'

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	/**
	 * Http request for creating a new user login
	 * @param user New user information
	 * @returns Observable
	 */
	signUp(user: IUser) {
		let obs = new Observable<IUser>((observer) => {
			let data = new FormData()
			Object.keys(user).forEach((e) => {
				if (e === 'profile_pic')
					data.append(e, user[e as keyof IUser] as File)
				else data.set(e, user[e as keyof IUser] as string)
			})
			this.http
				.post<JSONResponse<IUser>>(
					environment.apiUrl + '/users/register',
					data,
					{
						withCredentials: true,
					}
				)
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})
		return obs
	}

	/**
	 * Http request for updating a user
	 * @param user Updated user information
	 * @returns Observale
	 */
	updateUser(user: any) {
		let obs = new Observable<IUser>((observer) => {
			this.http
				.patch<JSONResponse<IUser>>(environment.apiUrl + '/users', user, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})
		return obs
	}

	/**
	 * Http request to sign into a user account
	 * @param user Email and Password
	 * @returns Observable
	 */
	signIn(user: Partial<IUser>) {
		let obs = new Observable<IUser>((observer) => {
			this.http
				.post<JSONResponse<IUser>>(environment.apiUrl + '/users', user, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to validate an active session
	 * @returns Observable
	 */
	checkIn() {
		let obs = new Observable<IUser>((observer) => {
			this.http
				.get(environment.apiUrl + '/users', {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to end the current login session
	 * @returns Observable
	 */
	signOut() {
		let obs = new Observable((observer) => {
			this.http
				.delete<JSONResponse<undefined>>(environment.apiUrl + '/users', {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}
}
