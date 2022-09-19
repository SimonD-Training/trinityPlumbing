import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminRoutingModule } from './admin-routing.module'
import { InventoryCrudComponent } from './inventory-crud/inventory-crud.component'
import { FormsModule } from '@angular/forms'
import { ServicesCrudComponent } from './services-crud/services-crud.component'
import { AdminheadComponent } from 'src/app/components/adminhead/adminhead.component'

@NgModule({
	declarations: [InventoryCrudComponent, ServicesCrudComponent, AdminheadComponent],
	imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
