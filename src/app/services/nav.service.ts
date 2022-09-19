import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class NavService {
	region: 'admin' | 'user' | 'none' = 'none'

	constructor() {}
}
