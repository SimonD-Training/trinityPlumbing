import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { IAdmin } from 'src/app/interfaces/admin.interface'
import { AdminService } from 'src/app/services/admin.service'

@Component({
	selector: 'app-verify',
	templateUrl: './verify.component.html',
	styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent implements OnInit {
	admin: IAdmin = <IAdmin>{}
	constructor(private aService: AdminService, private router: Router) {}

	ngOnInit(): void {}

	submit(form: NgForm) {
		const payload = form.value
		this.aService.signIn(payload).subscribe({
			next: () => {
				this.router.navigate(['../admins'])
			},
			error: (err) => {
				alert(err.message)
			},
		})
	}
}
