import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { AppCheckoutPageComponent } from './app-checkout-page/app-checkout-page.component';
import { AppStorageComponent } from './app-storage/app-storage.component';


const routes: Routes = [
  {
  path:"login",
  component:AppLoginComponent
  },
  {
    path:"register",
    component:AppRegisterComponent
  },
  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
  },
  {
    path:"main",
    component:AppMainPageComponent
  },
  {
    path:"checkout",
    component:AppCheckoutPageComponent
  },
  {
    path:"storage",
    component:AppStorageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
