import { Pipe, PipeTransform } from '@angular/core';
import { CarDetaildto } from '../models/car-detail-dto';

@Pipe({
  name: 'carfilter'
})
export class CarfilterPipe implements PipeTransform {

  transform(value: CarDetaildto[],  filteredCar: string): CarDetaildto[] {
    filteredCar=filteredCar?filteredCar.toLocaleLowerCase():""
    return filteredCar?value.filter((c:CarDetaildto)=>c.descriptions.toLocaleLowerCase().indexOf(filteredCar)!==-1):value;
  }

}
