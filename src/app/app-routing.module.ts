import { ServicesComponent } from './pages/services/services.component'
import { ProductsComponent } from './pages/users/products/products.component'
import { CartComponent } from './pages/users/cart/cart.component'
import { HomeComponent } from './pages/home/home.component'
import { NgModule } from '@angular/core'
import { Router, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '*', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: 'home' },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
