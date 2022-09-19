import { NgModule } from '@angular/core'
import {
	Event,
	Router,
	RouterEvent,
	RouterModule,
	Routes,
} from '@angular/router'
import { NavService } from 'src/app/services/nav.service'
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
	constructor(router: Router, private nService: NavService) {
		router.events.subscribe((resp: any) => {
			if (/\/admins\//.test(resp.url)) nService.region = 'admin'
			window.scrollTo(0, 0)
		})
	}
}
