import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path: 'cars/color/:colorId', component: CarComponent},
  {path: 'cars/brand/:brandId', component: CarComponent},
  {path:'cars/detail/:carId',component:CarDetailDtoComponent},
  {path:"cars/GetBySearch/:brandId/:colorId/:minDailyPrice/:maxDailyPrice", component:CarComponent},
  {path:"cars/payment/:carId",component:PaymentComponent},
  {path:"cars/success",component:PaymentSuccessComponent},
  {path:"car/add",component:CarAddComponent},
  {path:"brand/add",component:BrandAddComponent},
  {path:"color/add",component:ColorAddComponent},
  {path:"car/edit/:carId",component:CarEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
