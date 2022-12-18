import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/model/color/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{
  color:Color[]=[]

  ngOnInit(): void {
    this.getColor()
  }
  constructor(private colorService:ColorService){}
  getColor(){
    this.colorService.getColor().subscribe(response=>{
      this.color=response.data
    })
  }
}
