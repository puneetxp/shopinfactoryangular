import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { CartComponent } from './user/cart/cart.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';


const routes: Routes = [
  {
    path : '',
    component :HomeComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path:'login',
    component: LoginComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'signup',
    component: RegisterComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate:[AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
