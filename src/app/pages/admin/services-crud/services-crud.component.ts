import { Component, OnInit } from '@angular/core'
import { IService } from 'src/app/interfaces/service.interface'
import { ServicesService } from 'src/app/services/services.service'

@Component({
	selector: 'app-services-crud',
	templateUrl: './services-crud.component.html',
	styleUrls: ['./services-crud.component.scss'],
})
export class ServicesCrudComponent implements OnInit {
	Services: IService[] = []
	newService: IService = <IService>{}
	listArray: { class: string; toggle: boolean }[] = []
	constructor(private sService: ServicesService) {}

	ngOnInit(): void {
		this.sService.getAll().subscribe((data) => {
			this.Services = data ?? []
			this.Services?.forEach(() => {
				this.listArray.push({ class: 'fa fa-pencil', toggle: true })
			})
		})
	}

	createService(payload: IService) {
		this.sService.add(payload).subscribe({
			next: (data) => {
				this.Services.push(data)
				this.newService = <IService>{}
				this.listArray.push({ class: 'fa fa-pencil', toggle: true })
			},
			error: (err) => {
				alert(err.message)
			},
		})
	}

	updateService(id: string, payload: IService) {
		this.sService.update(id, payload).subscribe({
			error: (err) => {
				alert(err.message)
			},
		})
	}

	deleteService(id: string) {
		this.sService.delete(id).subscribe({
			next: (data) => {
				const Service = this.Services.find((value) => value._id === id)
				this.Services.splice(
					this.Services.indexOf(Service!),
					this.Services.indexOf(Service!) + 1
				)
			},
			error: (err) => {
				alert(err.message)
			},
		})
	}
}
