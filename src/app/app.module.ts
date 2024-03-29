import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeModifyComponent } from './employee-modify/employee-modify.component';
import { EmployeeComponent } from './employee/employee.component';
import { CarsComponent } from './cars/cars.component';
import { CarModifyComponent } from './car-modify/car-modify.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './token.interceptor';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { FirmwareComponent } from './firmware/firmware.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeModifyComponent,
    EmployeeComponent,
    CarsComponent,
    CarModifyComponent,
    LoginComponent,
    NavbarComponent,
    MainComponentComponent,
    FirmwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
