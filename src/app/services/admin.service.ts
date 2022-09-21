import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, take } from 'rxjs'
import { environment } from 'src/environments/environment'
import { GenericSubscribe } from '../interfaces/default'
import { JSONResponse } from '../interfaces/json.interface'
import { IAdmin } from '../interfaces/admin.interface'

@Injectable({
	providedIn: 'root',
})
export class AdminService {
	constructor(private http: HttpClient) {}

	/**
	 * Http request to sign into a admin account
	 * @param admin Email and Password
	 * @returns Observable
	 */
	signIn(admin: Partial<IAdmin>) {
		let obs = new Observable<IAdmin>((observer) => {
			this.http
				.post<JSONResponse<IAdmin>>(environment.apiUrl + '/admins', admin, {
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
		let obs = new Observable<IAdmin>((observer) => {
			this.http
				.get(environment.apiUrl + '/admins', {
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
				.delete<JSONResponse<undefined>>(environment.apiUrl + '/admins', {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}
}
