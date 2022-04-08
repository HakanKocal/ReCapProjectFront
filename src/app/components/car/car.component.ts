import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetaildto } from 'src/app/models/car-detail-dto';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  dataLoaded=false;
  carDtoDetails:CarDetaildto[]=[];
  carImages:CarImage[]=[];
  constructor(private carService:CarService,private activetedRoute:ActivatedRoute,private ImageService:CarImageService) { }
  filteredCar="";
  ngOnInit(): void {
    console.log("1.")
    this.activetedRoute.params.subscribe(params=>{
      if(params["brandId"] && params['colorId'] && params['colorId'] && params['minDailyPrice'] && params['maxDailyPrice']){
        this.getFilter(params["brandId"], params['colorId'],params['minDailyPrice'],params['maxDailyPrice']);
      }
      else if(params["colorId"])
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
    getFilter(brandId:number,colorId:number,minDailyPrice:number,maxDailyPrice:number)
    {
      this.carService.getFilter(brandId,colorId,minDailyPrice,maxDailyPrice).subscribe(repsonse=>{
        this.carDtoDetails=repsonse.data;
        this.dataLoaded=true;
      })
    }

   
}
