import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car/car';
import { CarListDto } from 'src/app/model/dto/carListDto';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car:CarListDto[]=[]

  constructor(private carService:CarService){}
  ngOnInit(): void {
    this.getCar()
  }

  getCar(){
    this.carService.getCar().subscribe(response=>{
      this.car=response.data;      
    })
  }
}
