import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetaildto } from '../models/car-detail-dto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44351/api"
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetaildto>>{
    let newPath=this.apiUrl+"/cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetaildto>>(newPath);
   }
   getCarByColor(colorId:number):Observable<ListResponseModel<CarDetaildto>>{
     let newPath=this.apiUrl+"/cars/getcarsbycolorid?colorId="+colorId;
     return this.httpClient.get<ListResponseModel<CarDetaildto>>(newPath);
   }
   getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetaildto>>{
    let newPath=this.apiUrl+"/cars/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetaildto>>(newPath);
   }
}
