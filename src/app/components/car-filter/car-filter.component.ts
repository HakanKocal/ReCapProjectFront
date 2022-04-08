import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {
  colors:Color[]=[];
  brands:Brand[]=[];
  currentColor:Color;
  currentBrand:Brand;
  minPrice:number=1;
  maxPrice:number=1;
  filterColor="";
  constructor(private colorService:ColorService,private brandService:BrandService,private carService:CarService, private router: Router) { }

  ngOnInit(): void {
   this.getColor();
   this.getBrand();
  }
  getColor(){
    this.colorService.getColor().subscribe(response=>{
    this.colors=response.data
    })
  }
  getBrand()
  {
    this.brandService.getBrand().subscribe(response=>{
      this.brands=response.data
    })
  }
  setCurrentColor(color:Color)
  {
    this.currentColor=color;
  }
  getCurrentColorClass(color){
    if(color===this.currentColor)
    {
      return "list-group-item bg-success text-white"
    }
    else
    {
      return "list-group-item"
    }
  }
  setCurrentBrand(brand:Brand)
  {
    this.currentBrand=brand;
  }
  getCurrentBrandClass(brand){
    if(brand===this.currentBrand)
    {
      return "list-group-item bg-success text-white"
    }
    else
    {
      return "list-group-item"
    }
  }
  filter()
  {
    //https://localhost:44351/api/cars/GetBySearch?brandId=1&colorId=1&minDailyPrice=1&maxDailyPrice=5000
    this.carService.getFilter(this.currentBrand.brandId,this.currentColor.colorId,this.minPrice,this.maxPrice);
    this.router.navigateByUrl("/cars/GetBySearch/" + this.currentBrand.brandId + "/" + this.currentColor.colorId + "/" + this.minPrice + "/" + this.maxPrice);
  }
}
