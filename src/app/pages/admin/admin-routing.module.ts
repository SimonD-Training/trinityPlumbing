import { NgModule } from '@angular/core'
import { Router, RouterModule, Routes } from '@angular/router'
import { ServicesComponent } from '../services/services.component'
import { InventoryCrudComponent } from './inventory-crud/inventory-crud.component'

const routes: Routes = [
	{ path: 'inventory', component: InventoryCrudComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: '**', redirectTo: '../inventory' },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {
	constructor(router: Router) {
		router.events.subscribe(() => {
			window.scrollTo(0, 0)
		})
	}
}
