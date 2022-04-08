import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetaildto } from 'src/app/models/car-detail-dto';
import { Rental } from 'src/app/models/rental';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  rentDate:number=1;
  constructor(private carDetailDtoService:CarDetailDtoService,private activetedRoute:ActivatedRoute,private router:Router,private rentalService:RentalService) { }
  carDtoDetails:CarDetaildto[]=[];
  rental:Rental[]=[];
  rentPrice:number;
  StartDate:Date
  EndDate:Date
  carId:number
  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      this.getCarDetails(params["carId"])
    })
  this.getRentRange()
  console.log(this.rentDate)
this.getStartDate();
  }

  getCarDetails(id:number){
    this.carDetailDtoService.getCarDetails(id).subscribe(response=>{
      this.carDtoDetails=response.data;
      this.rentPrice=response.data[0].dailyPrice*this.rentDate;
      this.carId=response.data[0].carId;
    })
  }
  pay()
  {
    this.router.navigateByUrl("/cars/success")
  }
  getRentRange()
  {
    this.rentalService.getNumberOfDays().subscribe((response) => {
      this.rentDate = response;
    });
  }
  getStartDate()
  {
    this.rentalService.getRangeStart().subscribe(response=>{
      this.StartDate=response;
      console.log(response.toISOString().split('T')[0]+"date");
    });
  }
  
}
