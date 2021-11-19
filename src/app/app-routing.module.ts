import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './component/showcase/showcase.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path : '',
    component :HomeComponent,
    canActivate:[AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
