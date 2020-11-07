import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { AppMainPageCarouselComponent } from './app-main-page-carousel/app-main-page-carousel.component';
import { AppMainPageCalendarComponent } from './app-main-page-calendar/app-main-page-calendar.component';
import { OwlModule } from 'ngx-owl-carousel';
import { getBRPaginatorIntl } from 'src/_helpers/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { AppStorageComponent } from './app-storage/app-storage.component';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { AppAdminIngredientsComponent } from './app-admin-ingredients/app-admin-ingredients.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { GlobalErrorHandler } from 'src/global-error-handler';
import { AppAdminPedidosComponent } from './app-admin-pedidos/app-admin-pedidos.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppRegisterComponent,
    AppMainPageComponent,
    AppMainPageCarouselComponent,
    AppMainPageCalendarComponent,
    AppLoginComponent,
    AppStorageComponent,
    DialogBoxComponent,
    AppLoginComponent,
    AppAdminComponent,
    AppAdminIngredientsComponent,
    AppAdminPedidosComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatDatepickerModule,
    MatMomentDateModule,
    CarouselModule,
    MatIconModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatTabsModule,
    MatGridListModule,
    HttpClientModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getBRPaginatorIntl() },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
