import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetaildto } from 'src/app/models/car-detail-dto';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  dataLoaded=false;
  carDtoDetails:CarDetaildto[]=[];
  constructor(private carService:CarService,private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("1.")
    this.activetedRoute.params.subscribe(params=>{
      if(params["colorId"])
      {
        this.getCarByColor(params["colorId"])
      }
      else if(params["brandId"])
      {
        this.getCarsByBrand(params["brandId"])
      }
      else
      {
        this.getCarDetailDto();
      }
    })

  }
  getCarDetailDto()
  {
    this.carService.getCarDetails().subscribe(response=>{
      this.carDtoDetails=response.data
      this.dataLoaded=true;
    })
  }
  getCarByColor(colorId:number)
  {
    this.carService.getCarByColor(colorId).subscribe(Response=>
      {
        this.carDtoDetails=Response.data;
        this.dataLoaded=true;
      })
  }

    getCarsByBrand(brandId:number)
    {
      this.carService.getCarsByBrand(brandId).subscribe(response=>{
        this.carDtoDetails=response.data;
        this.dataLoaded = true;
      })
    }
}
