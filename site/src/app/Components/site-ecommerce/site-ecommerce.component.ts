import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
  selector: 'app-site-ecommerce',
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent],
  templateUrl: './site-ecommerce.component.html',
  styleUrl: './site-ecommerce.component.css'
})
export class SiteEcommerceComponent {

  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  isLoginOrSignupPage(): boolean {
    return this.currentRoute === '/login' || this.currentRoute === '/signup';
  }

}
