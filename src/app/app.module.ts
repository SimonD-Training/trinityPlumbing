import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { ServicesComponent } from './pages/services/services.component'
import { LoginComponent } from './pages/login/login.component'
import { SignupComponent } from './pages/signup/signup.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { AdminModule } from './pages/admin/admin.module'
import { HttpClientModule } from '@angular/common/http'
import { AdminheadComponent } from './components/adminhead/adminhead.component'
import { VerifyComponent } from './pages/admin/verify/verify.component'

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ServicesComponent,
		LoginComponent,
		SignupComponent,
		HeaderComponent,
		FooterComponent,
		AdminheadComponent,
		VerifyComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		AdminModule,
		FormsModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
