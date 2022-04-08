import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  colorAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private colorService:ColorService) { }

  ngOnInit(): void {
    this.createColorAddForm()
  }
  createColorAddForm(){
    this.colorAddForm=this.formBuilder.group({
      colorId:["",Validators.required],
      colorName:["",Validators.required]
    })
  }
  add(){
    {
      if(this.colorAddForm.valid){
        let carModel=Object.assign({},this.colorAddForm.value)
        this.colorService.add(carModel).subscribe(data=>{console.log(data.message+" başarılı")},responseError=>{
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
}
