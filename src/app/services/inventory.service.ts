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

	public get inventory(): Observable<IProduct[]> {
		return new Observable<IProduct[]>((observer) => {
			this.http
				.get<JSONResponse<IProduct[]>>(environment.apiUrl + '/items', {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})
	}

	public get categories(): Observable<{ _id: string; name: string }[]> {
		return new Observable((observer) => {
			this.http
				.get<JSONResponse<{ name: string }[]>>(
					environment.apiUrl + '/categories',
					{ withCredentials: true }
				)
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})
	}

	/**
	 * Http request to add an item
	 * @param product New item information
	 * @returns Observable
	 */
	add(product: IProduct) {
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
	get(id: string) {
		let obs = new Observable<IProduct>((observer) => {
			this.http
				.get<JSONResponse<IProduct>>(environment.apiUrl + `/items/${id}`, {
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
	update(id: string, payload: Partial<IProduct>) {
		let obs = new Observable<IProduct>((observer) => {
			this.http
				.patch<JSONResponse<IProduct>>(
					environment.apiUrl + `/items/${id}`,
					payload,
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
	delete(id: string) {
		let obs = new Observable((observer) => {
			this.http
				.delete<JSONResponse<any>>(environment.apiUrl + `/items/${id}`, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to add a category
	 * @param category New item information
	 * @returns Observable
	 */
	addCat(category: { name: string }) {
		let obs = new Observable<{ _id: string; name: string }>((observer) => {
			this.http
				.post<JSONResponse<{ _id: string; name: string }>>(
					environment.apiUrl + '/categories',
					category,
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
	 * Http request to update a category
	 * @returns Observable
	 */
	updateCat(id: string, payload: Partial<{ _id: string; name: string }>) {
		let obs = new Observable<{ _id: string; name: string }>((observer) => {
			this.http
				.patch<JSONResponse<{ _id: string; name: string }>>(
					environment.apiUrl + `/categories/${id}`,
					payload,
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
	 * Http request to delete category
	 * @returns Observable
	 */
	deleteCat(id: string) {
		let obs = new Observable((observer) => {
			this.http
				.delete<JSONResponse<null>>(
					environment.apiUrl + `/categories/${id}`,
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
