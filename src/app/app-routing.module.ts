import { CheckoutComponent } from './pages/users/checkout/checkout.component'
import { SignupComponent } from './pages/signup/signup.component'
import { LoginComponent } from './pages/login/login.component'
import { ServicesComponent } from './pages/services/services.component'
import { ProductsComponent } from './pages/users/products/products.component'
import { CartComponent } from './pages/users/cart/cart.component'
import { HomeComponent } from './pages/home/home.component'
import { NgModule } from '@angular/core'
import { Router, RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './guards/auth.guard'
import { NavService } from './services/nav.service'

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'services', component: ServicesComponent },
	{ path: 'checkout', component: CheckoutComponent },
	{ path: 'cart', component: CartComponent },
	{
		path: 'admins',
		loadChildren: () =>
			import('./pages/admin/admin.module').then((m) => m.AdminModule),
		canActivate: [AuthGuard],
	},
	{ path: '**', redirectTo: 'home' },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {
	constructor(router: Router, private nService: NavService) {
		router.events.subscribe((resp) => {
			nService.region = 'user'
			window.scrollTo(0, 0)
		})
	}
}
