import { Component, OnInit } from '@angular/core'
import { IProduct } from 'src/app/interfaces/product.interface'
import { InventoryService } from 'src/app/services/inventory.service'

@Component({
	selector: 'app-inventory-crud',
	templateUrl: './inventory-crud.component.html',
	styleUrls: ['./inventory-crud.component.scss'],
})
export class InventoryCrudComponent implements OnInit {
	Items: IProduct[] = []
	newItem: any
	listArray: { class: string; toggle: boolean }[] = []
	constructor(private iService: InventoryService) {}

	ngOnInit(): void {
		this.iService.getAll().subscribe((data) => {
			this.Items = data ?? []
			this.Items?.forEach(() => {
				this.listArray.push({ class: 'fa fa-pencil', toggle: true })
			})
		})
	}

	createItem(payload: IProduct) {
		this.iService.add(payload).subscribe({
			next: (data) => {
				this.Items.push(data)
				this.newItem = {}
			},
			error: (err) => {
				alert(err.message)
			},
		})
	}

	updateItem(id: string, payload: IProduct) {
		this.iService.update(id, payload).subscribe({
			error: (err) => {
				alert(err.message)
			},
		})
	}

	deleteItem(id: string) {
		this.iService.delete(id).subscribe({
			next: (data) => {
				const item = this.Items.find((value) => value._id === id)
				this.Items.splice(
					this.Items.indexOf(item!),
					this.Items.indexOf(item!) + 1
				)
			},
			error: (err) => {
				alert(err.message)
			},
		})
	}
}
