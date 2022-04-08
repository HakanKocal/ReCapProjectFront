import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { CarfilterPipe } from './pipes/carfilter.pipe';
import { ColorfilterPipe } from './pipes/colorfilter.pipe';
import { BrandfilterPipe } from './pipes/brandfilter.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    CustomerComponent,
    CarComponent,
    ColorComponent,
    RentalComponent,
    BrandComponent,
    CarDetailDtoComponent,
    CarfilterPipe,
    ColorfilterPipe,
    BrandfilterPipe,
    CarFilterComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    DatePickerComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,

    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
