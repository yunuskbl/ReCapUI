import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarListDto } from 'src/app/model/dto/carListDto'
import { ListResponseModel } from 'src/app/model/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44368/api/cars/"
  constructor(private httpClient:HttpClient) { }

  getCar():Observable<ListResponseModel<CarListDto>>{
    let newUrl = this.apiUrl+"getcarlist"
    return this.httpClient.get<ListResponseModel<CarListDto>>(newUrl)
  }
}
