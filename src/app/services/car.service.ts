import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetaildto } from '../models/car-detail-dto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44351/api"
  constructor(private httpClient:HttpClient) { }
  filterCar="";
  getCarDetails():Observable<ListResponseModel<CarDetaildto>>{
    let newPath=this.apiUrl+"/cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetaildto>>(newPath);
   }
   getCar(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"/cars/getcarbycarid?carId="+id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
   getCarByColor(colorId:number):Observable<ListResponseModel<CarDetaildto>>{
     let newPath=this.apiUrl+"/cars/getcarsbycolorid?colorId="+colorId;
     return this.httpClient.get<ListResponseModel<CarDetaildto>>(newPath);
   }
   getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetaildto>>{
    let newPath=this.apiUrl+"/cars/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetaildto>>(newPath);
   }
   getFilter(brandId:number, colorId:number, minDailyPrice:number, maxDailyPrice:number):Observable<ListResponseModel<CarDetaildto>>{
    let newPath=this.apiUrl+"/cars/GetBySearch"+"?brandId="+brandId+"&colorId="+colorId+"&minDailyPrice="+minDailyPrice+"&maxDailyPrice="+maxDailyPrice
    return this.httpClient.get<ListResponseModel<CarDetaildto>>(newPath);
   }
   add(car:Car):Observable<ResponseModel>
   {
     
    let newpath=this.apiUrl+"/cars/add"
    return this.httpClient.post<ResponseModel>(newpath,car);
   }
   update(car:Car):Observable<ResponseModel>{
    let newPath = this.apiUrl + "/cars/update";
    return this.httpClient.post<ResponseModel>(newPath, car);
  }

  //  getSearchKey(search:string)
  //  {
  //    this.filterCar=search;
  //  }
  //  listCar()
  //  {
  //    console.log(this.filterCar);
  //     return this.filterCar;
  //  }
}
