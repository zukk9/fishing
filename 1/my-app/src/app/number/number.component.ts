import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface Numbers {
  id: number,
  number: string
}

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.sass']
})
export class NumberComponent implements OnInit{
  public filterTerm!: string;
  public numbers: Numbers[] = [
    {id: 1, number: 'СВ-112'},
    {id: 2, number: 'ТВ-123'},
    {id: 3, number: 'ИИ 321'},
    {id: 4, number: 'КК34556'},
  ]; 

  constructor() {}

  ngOnInit(): void {
    
  }
  

}
