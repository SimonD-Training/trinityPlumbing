import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, take } from 'rxjs'
import { environment } from 'src/environments/environment'
import { GenericSubscribe } from '../interfaces/default'
import { JSONResponse } from '../interfaces/json.interface'
import { IService } from '../interfaces/service.interface'

@Injectable({
	providedIn: 'root',
})
export class ServicesService {
	constructor(private http: HttpClient) {}

	/**
	 * Http request to add an service
	 * @param service New service information
	 * @returns Observable
	 */
	add(service: IService) {
		let obs = new Observable<IService>((observer) => {
			this.http
				.post<JSONResponse<IService>>(
					environment.apiUrl + '/services',
					service,
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
	 * Http request to get services
	 * @returns Observable
	 */
	getService(id: string) {
		let obs = new Observable<IService>((observer) => {
			this.http
				.get<JSONResponse<IService>>(
					environment.apiUrl + `/services/${id}`,
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
	getServices() {
		let obs = new Observable<IService[]>((observer) => {
			this.http
				.get<JSONResponse<IService[]>>(environment.apiUrl + '/services', {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to update an service
	 * @returns Observable
	 */
	updateService(id: string) {
		let obs = new Observable<IService>((observer) => {
			this.http
				.patch<JSONResponse<IService>>(
					environment.apiUrl + `/services/${id}`,
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
	 * Http request to delete services
	 * @returns Observable
	 */
	deleteService(id: string) {
		let obs = new Observable((observer) => {
			this.http
				.delete<JSONResponse<any>>(environment.apiUrl + `/services/${id}`, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}
}
