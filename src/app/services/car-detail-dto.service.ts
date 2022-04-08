import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetaildto } from '../models/car-detail-dto';
import { CarImage } from '../models/carImage';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailDtoService {

  apiUrl="https://localhost:44351/api"
  constructor(private httpClient:HttpClient) { }
  getCarDetails(id:number):Observable<ListResponseModel<CarDetaildto>>{
    let newPath=this.apiUrl+"/cars/getcardetailbyid?carId="+id;
    return this.httpClient.get<ListResponseModel<CarDetaildto>>(newPath);
  }
  getCarsImagesById(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getbycarid?carid="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
   }
   getFilter(brandId:number, colorId:number, minDailyPrice:number, maxDailyPrice:number):Observable<ListResponseModel<CarDetaildto>>{
    let newPath=this.apiUrl+"/cars/GetBySearch"+"?brandId="+brandId+"&colorId="+colorId+"&minDailyPrice="+minDailyPrice+"&maxDailyPrice="+maxDailyPrice
    return this.httpClient.get<ListResponseModel<CarDetaildto>>(newPath);
   }
}



