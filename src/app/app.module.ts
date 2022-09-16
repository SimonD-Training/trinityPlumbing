import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { ServicesComponent } from './pages/services/services.component'
import { LoginComponent } from './pages/login/login.component'
import { SignupComponent } from './pages/signup/signup.component';
import { PageheaderComponent } from './pages/pageheader/pageheader.component'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ServicesComponent,
		LoginComponent,
		SignupComponent,
  HeaderComponent,
  PageheaderComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
