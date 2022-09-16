import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	panelOpenState = false
	constructor(private router: Router) {}
	ngOnInit() {
		this.routerCheck()
	}

	routerCheck() {
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(() => {
				if (this.router.url == '/home') {
					let navMenu = document.querySelector('header')
					navMenu?.classList.remove('switch')
					window.onscroll = () => {
						let body = document.querySelector('body') as HTMLBodyElement
						if (window.pageYOffset > 50 && true) {
							navMenu?.classList.add('transition')
						} else {
							navMenu?.classList.remove('transition')
							body.style.margin = '0'
						}
					}
				} else {
					let navMenu = document.querySelector('header')
					navMenu?.classList.add('switch')
				}
			})
	}
}
