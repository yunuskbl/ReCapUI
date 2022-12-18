import { Component, OnInit } from '@angular/core';
import { RentalListDto } from 'src/app/model/dto/rentalListDto';
import { Rental } from 'src/app/model/rental/rental';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rental:RentalListDto[]=[]

  constructor(private rentalService:RentalService) {
    
  }
  ngOnInit(): void {
    this.getRental()
  }

  getRental(){
    this.rentalService.getRental().subscribe(response=>{
      this.rental=response.data
    })
  }
}
