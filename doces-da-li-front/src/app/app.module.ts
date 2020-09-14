import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatTableModule} from '@angular/material/table'
import {MatListModule} from '@angular/material/list'
import { AppMainPageCarouselComponent } from './app-main-page-carousel/app-main-page-carousel.component';
import { AppMainPageCalendarComponent } from './app-main-page-calendar/app-main-page-calendar.component';
import { AppCheckoutPageComponent } from './app-checkout-page/app-checkout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppRegisterComponent,
    AppMainPageComponent,
    AppMainPageCarouselComponent,
    AppMainPageCalendarComponent,
    AppCheckoutPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatCarouselModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
