import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  events: string[] = [];
  rentRange:number;
  isStartDatePicked:boolean;
  isEndDatePicked:boolean;
  rentPrice:number;
  constructor(private rantalService:RentalService) { }

  ngOnInit(): void {
  }
  setNumberOfDays(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    var diff = new Date(dateRangeEnd.value).valueOf() - new Date(dateRangeStart.value).valueOf();
    var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 

    this.rantalService.setNumberOfDays(diffDays,new Date(dateRangeEnd.value));
    console.log(diffDays);
    
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    
  }

  startDatePicked(){
    this.rantalService.startDatePicked();
    console.log("start date picked");
     
  }


  
  endDatePicked(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement){
    this.rantalService.endDatePicked();
    this.setNumberOfDays(dateRangeStart,dateRangeEnd);
    console.log("End date picked");

    
  }
}
