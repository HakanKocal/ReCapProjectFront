import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,FormControl,Validators} from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brandAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private brandService:BrandService) { }

  ngOnInit(): void {
this.createBrandAddForm()
  }
  createBrandAddForm(){
    this.brandAddForm=this.formBuilder.group({
      brandId:["",Validators.required],
      brandName:["",Validators.required]
    })
  }
  add()
  {
    if(this.brandAddForm.valid)
    {
      let brandModel=Object.assign({},this.brandAddForm.value)
      this.brandService.add(brandModel).subscribe(data=>{console.log(data.message)},responseError=>{
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
