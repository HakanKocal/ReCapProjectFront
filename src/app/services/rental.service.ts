import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44351/api"
  numberOfRentDays = new BehaviorSubject<number>(-1);
  currentNumberOfRentDays = this.numberOfRentDays.asObservable();

  rentPrice = new BehaviorSubject<number>(-1);
  currentRentPrice = this.rentPrice.asObservable();
  dateRangeStart=new BehaviorSubject<any>('2/10/2022')
  currentRangeStart=this.dateRangeStart.asObservable();

  isStartDatePicked = new BehaviorSubject<boolean>(false);
  currentIsStartDatePicked = this.isStartDatePicked.asObservable();

  isEndDatePicked = new BehaviorSubject<boolean>(false);
  currentIsEndDatePicked = this.isEndDatePicked.asObservable();
  constructor(private httpClient:HttpClient) { }
  PostRental(rental:Rental):Observable<ResponseModel>
  {
    //https://localhost:44351/api/rentals/add
    let newPath=this.apiUrl+"rentals/add";
    
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }
  
  getNumberOfDays():Observable<number>{
    return this.numberOfRentDays;
  }

  getRentPrice():Observable<number>{
    return this.rentPrice;
  }

  setNumberOfDays(value:number,startDate:Date){
    this.numberOfRentDays.next(value);
    this.dateRangeStart.next(startDate);
  }

  setRentPrice(value:number){
    this.rentPrice.next(value);
  }
  setRangeStart(value:number){
    this.dateRangeStart.next(value);
  }
  getRangeStart():Observable<any>{
    return this.currentRangeStart;
  }

  getIsStartDatePicked():Observable<boolean>{
    return this.isStartDatePicked;
  }

  startDatePicked(){
    this.isStartDatePicked.next(true);
  }

  getIsEndDatePicked():Observable<boolean>{
    return this.isEndDatePicked;
  }

  endDatePicked(){
    this.isEndDatePicked.next(true);
  }
}
