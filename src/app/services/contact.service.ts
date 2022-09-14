import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, take } from 'rxjs'
import { environment } from 'src/environments/environment'
import { GenericSubscribe } from '../interfaces/default'
import { JSONResponse } from '../interfaces/json.interface'
import { IContact } from '../interfaces/contact.interface'

@Injectable({
	providedIn: 'root',
})
export class ContactService {
	constructor(private http: HttpClient) {}

	/**
	 * Http request to add an contact
	 * @param contact New contact information
	 * @returns Observable
	 */
	addContact(contact: IContact) {
		let obs = new Observable<IContact>((observer) => {
			this.http
				.post<JSONResponse<IContact>>(
					environment.apiUrl + '/contacts',
					contact,
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
	 * Http request to get contacts
	 * @returns Observable
	 */
	getContact(id: string) {
		let obs = new Observable<IContact>((observer) => {
			this.http
				.get<JSONResponse<IContact>>(
					environment.apiUrl + `/contacts/${id}`,
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
	 * Http request to get payment methods
	 * @returns Observable
	 */
	getContacts() {
		let obs = new Observable<IContact[]>((observer) => {
			this.http
				.get<JSONResponse<IContact[]>>(environment.apiUrl + '/contacts', {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to update an contact
	 * @returns Observable
	 */
	updateContact(id: string) {
		let obs = new Observable<IContact>((observer) => {
			this.http
				.patch<JSONResponse<IContact>>(
					environment.apiUrl + `/contacts/${id}`,
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
	 * Http request to delete contacts
	 * @returns Observable
	 */
	deleteContact(id: string) {
		let obs = new Observable((observer) => {
			this.http
				.delete<JSONResponse<any>>(environment.apiUrl + `/contacts/${id}`, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}
}
