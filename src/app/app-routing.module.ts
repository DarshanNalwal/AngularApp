import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/auth',
    pathMatch: 'full'
  },
  {
    path : 'auth',
    component : AuthComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'features',
    component : FeaturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
