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
	Categories: { _id: string; name: string }[] = []
	newItem: IProduct = <IProduct>{}
	newCat: { _id: string; name: string } = <{ _id: string; name: string }>{}
	listArray: { class: string; toggle: boolean }[] = []
	constructor(private iService: InventoryService) {
		this.iService.inventory.subscribe((data) => {
			this.Items = data ?? []
			this.Items?.forEach(() => {
				this.listArray.push({ class: 'fa fa-pencil', toggle: true })
			})
		})
		this.iService.categories.subscribe((data) => {
			this.Categories = data ?? []
		})
	}

	ngOnInit(): void {}

	createItem(payload: IProduct) {
		console.log(payload)
		this.iService.add(payload).subscribe({
			next: (data) => {
				this.Items.push(data)
				this.listArray.push(this.listArray[0])
				this.newItem = <IProduct>{}
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
				this.listArray.pop()
			},
			error: (err) => {
				alert(err.message)
			},
		})
	}

	createCat(payload: { _id: string; name: string }) {
		this.iService.addCat(payload).subscribe({
			next: (data) => {
				this.Categories.push(data)
				this.newItem = <IProduct>{}
			},
			error: (err) => {
				alert(err.message)
			},
		})
	}

	updateCat(id: string, payload: { _id: string; name: string }) {
		this.iService.updateCat(id, payload).subscribe({
			error: (err) => {
				alert(err.message)
			},
		})
	}

	deleteCat(id: string) {
		this.iService.deleteCat(id).subscribe({
			next: (data) => {
				const category = this.Categories.find((value) => value._id === id)
				this.Categories.splice(
					this.Categories.indexOf(category!),
					this.Categories.indexOf(category!) + 1
				)
			},
			error: (err) => {
				alert(err.message)
			},
		})
	}
}
