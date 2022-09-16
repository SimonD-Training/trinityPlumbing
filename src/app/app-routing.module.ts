import { SignupComponent } from './pages/signup/signup.component'
import { LoginComponent } from './pages/login/login.component'
import { ServicesComponent } from './pages/services/services.component'
import { ProductsComponent } from './pages/users/products/products.component'
import { CartComponent } from './pages/users/cart/cart.component'
import { HomeComponent } from './pages/home/home.component'
import { NgModule } from '@angular/core'
import { Router, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
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
export class AppRoutingModule {
	constructor(router: Router) {
		router.events.subscribe(() => {
			window.scrollTo(0, 0)
		})
	}
}
