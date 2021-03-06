import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetaildto } from 'src/app/models/car-detail-dto';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailDtoService } from 'src/app/services/car-detail-dto.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-car-detail-dto',
  templateUrl: './car-detail-dto.component.html',
  styleUrls: ['./car-detail-dto.component.css'],
})
export class CarDetailDtoComponent implements OnInit {
  carDtoDetails:CarDetaildto[]=[];
  carImages:CarImage[];
  dataLoaded:boolean=false;
  defaultPath:string="https://localhost:44351";
  constructor(private carDetailDtoService:CarDetailDtoService,private activetedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      this.getCarDetails(params["carId"])
    })
  }

  getCarDetails(id:number){
    this.carDetailDtoService.getCarDetails(id).subscribe(response=>{
      this.carDtoDetails=response.data;
      this.dataLoaded=true;
    })
  }
  pay(carId:number)
  {
    var url="/cars/payment/"+carId
    this.router.navigateByUrl(url);
  }
 edit(carId:number)
 {
  let newPath="car/edit/"+carId;
  this.router.navigateByUrl(newPath)
 }
  
}
