import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path: '', component: LoginRegisterComponent},
  {path: 'Dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
