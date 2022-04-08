import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44351/api/"
  constructor(private httpClient:HttpClient) { }

  getBrand():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "brands/getall/";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath)
  }
  add(brand:Brand):Observable<ResponseModel>
  {
    let newPath=this.apiUrl+"brands/add"
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }
}
