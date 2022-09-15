import { HttpErrorResponse } from '@angular/common/http'
import { Observer } from 'rxjs'

export let GenericSubscribe = <T = any>(
	observer: Observer<T>,
	success?: Function,
	failure?: Function
) => {
	return {
		next: (data: any) => {
			console.log(data)
			observer.next(data?.data)
			if (success) success(data?.data)
		},
		error: (err: HttpErrorResponse) => {
			console.error(err.error)
			observer.error(err.error)
			if (failure) failure(err.error.error)
		},
	}
}
