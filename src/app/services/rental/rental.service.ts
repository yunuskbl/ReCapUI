import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalListDto } from 'src/app/model/dto/rentalListDto';
import { ListResponseModel } from 'src/app/model/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44368/api/rentalinfos/"
  constructor(private httpClient:HttpClient) { }

  getRental():Observable<ListResponseModel<RentalListDto>>{
    let newUrl=this.apiUrl+"getrentallist"
    return this.httpClient.get<ListResponseModel<RentalListDto>>(newUrl)
  }
}
