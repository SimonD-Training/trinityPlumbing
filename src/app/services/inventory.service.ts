import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, take } from 'rxjs'
import { environment } from 'src/environments/environment'
import { GenericSubscribe } from '../interfaces/default'
import { JSONResponse } from '../interfaces/json.interface'
import { IProduct } from '../interfaces/product.interface'

@Injectable({
	providedIn: 'root',
})
export class InventoryService {
	constructor(private http: HttpClient) {}

	/**
	 * Http request to add an item
	 * @param product New item information
	 * @returns Observable
	 */
	addItem(product: IProduct) {
		let obs = new Observable<IProduct>((observer) => {
			this.http
				.post<JSONResponse<IProduct>>(
					environment.apiUrl + '/items',
					product,
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
	 * Http request to get items
	 * @returns Observable
	 */
	getItem(id: string) {
		let obs = new Observable<IProduct>((observer) => {
			this.http
				.get<JSONResponse<IProduct>>(
					environment.apiUrl + `/items/${id}`,
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
	getItems() {
		let obs = new Observable<IProduct[]>((observer) => {
			this.http
				.get<JSONResponse<IProduct[]>>(environment.apiUrl + '/items', {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to update an item
	 * @returns Observable
	 */
	updateItem(id: string) {
		let obs = new Observable<IProduct>((observer) => {
			this.http
				.patch<JSONResponse<IProduct>>(
					environment.apiUrl + `/items/${id}`,
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
	 * Http request to delete items
	 * @returns Observable
	 */
	deleteItem(id: string) {
		let obs = new Observable((observer) => {
			this.http
				.delete<JSONResponse<any>>(
					environment.apiUrl + `/items/${id}`,
					{
						withCredentials: true,
					}
				)
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}
}
