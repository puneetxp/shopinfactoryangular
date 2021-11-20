import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './user/login/login.component';

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
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
