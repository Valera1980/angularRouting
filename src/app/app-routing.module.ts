import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { AuthComponent } from './auth/auth.component';
import { LoginGuard } from './login.guard';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //    path:'',
  //    component: AppComponent,
  //    canActivate:[LoginGuard],
  //    children: [
  //     {
  //       path: '',
  //       component: OneComponent
  //     }
  //   ]
     
  // },
  // {
  //   path:'',
  //   component:LoginLayoutComponent,
  //   children: [
  //     {
  //       path: 'auth',
  //       component: AuthComponent
  //     }
  //   ]

  // },
  {path:'auth',component:AuthComponent},
  {path:'one',component:OneComponent , canActivate:[LoginGuard]},
  {path:'two',component:TwoComponent , canActivate:[LoginGuard]},
  {path:'', redirectTo: '/one', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
