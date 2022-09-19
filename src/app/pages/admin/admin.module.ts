import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminRoutingModule } from './admin-routing.module'
import { InventoryCrudComponent } from './inventory-crud/inventory-crud.component'
import { FormsModule } from '@angular/forms'
import { ServicesCrudComponent } from './services-crud/services-crud.component'

@NgModule({
	declarations: [InventoryCrudComponent, ServicesCrudComponent],
	imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}
