import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/model/customer/customer';
import { CustomerResponseModel } from 'src/app/model/customer/customerResponseModel';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  
  customer:Customer[]=[]
  constructor(private customerService:CustomerService){}

  ngOnInit(): void {
    this.getCustomer()
  }

  getCustomer(){
    this.customerService.getCustomer().subscribe(response=>{
      this.customer=response.data
    })
  }

}
