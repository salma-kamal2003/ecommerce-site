import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login-page/login-page.component';
import { SignupPageComponent } from './Components/signup-page/signup-page.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { SiteEcommerceComponent } from './Components/site-ecommerce/site-ecommerce.component';
import { provideHttpClient } from '@angular/common/http';



export const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupPageComponent },
  {
    path: 'ecommerce-site',
    component: SiteEcommerceComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  { path: '**', redirectTo: '/login' }
];

export const appProviders = [
  provideHttpClient(),
  RouterModule.forRoot(routes)
];

