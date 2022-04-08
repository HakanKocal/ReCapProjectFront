import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup ,FormBuilder,FormControl,Validators} from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  brands:Brand[];
  colors:Color[];
  carId:number;
  constructor(private activetedRoute:ActivatedRoute, private router: Router,private carService:CarService,private formBuilder: FormBuilder,private brandService:BrandService,private colorService:ColorService) { }
  //car:Car={brandId: 0, colorId: 0, dailyPrice: 0, description: "", id: 0, modelYear: 0};
  car:Car[]=[];
  carUpdateForm: FormGroup;
  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      this.getCar(params["carId"])
    })
    
    this.getBrands();
    this.getColors();
    this.createCarUpdateForm();
  }
  getBrands() {
    this.brandService.getBrand().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColor().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getCar(carId:number)
  {
    this.carService.getCar(carId).subscribe(response=>{
      this.car=response.data;
    })
  }
  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
      id:["",Validators.required],
          brandId: ["",Validators.required],
            colorId: ["",Validators.required],
            modelYear: ["",Validators.required],
            dailyPrice: ["",Validators.required],
            description: ["",Validators.required]
    })
  }
  update() {
    if(this.carUpdateForm.valid){
      
      let carModel=Object.assign({},this.carUpdateForm.value)
      console.log(this.carId)
      this.carService.update(carModel).subscribe(data=>{console.log(data.message+" başarılı")},responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            console.log(responseError.error.Errors[i].ErrorMessage)
          }
        }
        else{
          alert("Formunuz Eksik")
        }
      })
    }
  }

}
