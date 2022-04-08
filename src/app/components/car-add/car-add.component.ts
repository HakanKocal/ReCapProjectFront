import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,FormControl,Validators} from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private carService:CarService) { }

  ngOnInit(): void {
    this.createCarAddForm()
  }
  createCarAddForm(){
    this.carAddForm=this.formBuilder.group({
          brandId: ["",Validators.required],
            colorId: ["",Validators.required],
            modelYear: ["",Validators.required],
            dailyPrice: ["",Validators.required],
            description: ["",Validators.required]
    })
  }
  add()
  {
    if(this.carAddForm.valid){
      let carModel=Object.assign({},this.carAddForm.value)
      this.carService.add(carModel).subscribe(data=>{console.log(data.message+" başarılı")},responseError=>{
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
