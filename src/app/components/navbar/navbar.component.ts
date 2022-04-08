import { Component,  OnInit,  } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  filterCar="";
  constructor(private carService:CarService) { }

  ngOnInit(): void {
  }
  // search()
  // {
  //   this.carService.getSearchKey(this.filterCar);
  // }
}
