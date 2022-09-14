import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserRoutingModule } from './users-routing.module'
import { WalletComponent } from './wallet/wallet.component'
import { ProductsComponent } from './products/products.component'
import { CartComponent } from './cart/cart.component'
import { CheckoutComponent } from './checkout/checkout.component'

@NgModule({
	declarations: [
		WalletComponent,
		ProductsComponent,
		CartComponent,
		CheckoutComponent,
	],
	imports: [CommonModule, UserRoutingModule],
})
export class UsersModule {}
