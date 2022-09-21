import { NgModule } from '@angular/core'
import { Router, RouterModule, Routes } from '@angular/router'
import { NavService } from 'src/app/services/nav.service'
import { InventoryCrudComponent } from './inventory-crud/inventory-crud.component'
import { ServicesCrudComponent } from './services-crud/services-crud.component'

const routes: Routes = [
	{ path: 'inventory', component: InventoryCrudComponent },
	{ path: 'services', component: ServicesCrudComponent },
	{ path: '**', redirectTo: 'inventory' },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AdminRoutingModule {
	constructor(router: Router, private nService: NavService) {
		router.events.subscribe((resp: any) => {
			if (/admins\//.test(resp.url)) nService.region = 'admin'
			window.scrollTo(0, 0)
		})
	}
}
