import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { AuthGuard } from './auth.guard';
import { AppAdminRelatorioComponent } from './app-admin-relatorio/app-admin-relatorio.component';

const routes: Routes = [
  {
    path: 'login',
    component: AppLoginComponent,
  },
  {
    path: 'register',
    component: AppRegisterComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: AppMainPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'admin',
    component: AppAdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'relatorio',
    component: AppAdminRelatorioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
