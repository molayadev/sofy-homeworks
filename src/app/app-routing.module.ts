import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ROOT_PAGE } from './constants/app-config';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', redirectTo: ROOT_PAGE, pathMatch: 'full', data: { showNav: false } },
  { path: 'home',
    loadChildren: () => import('./works/works.module').then(m => m.WorksModule),
    data: { showNav: false },
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    data: { showNav: false }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
