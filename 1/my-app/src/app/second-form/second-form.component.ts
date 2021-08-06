import {Component, OnInit} from '@angular/core';
import {CustomPipe} from '../filter.pipe';
import {numbers} from '../../../../../data';

export interface Numbers {
  id: number,
  number: string
}


@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.sass'],
  
})
export class SecondFormComponent implements OnInit {
  searchText:string = "";
  _numbers = numbers;
//   public numbers: Numbers[] = [
//     {id: 1, number: 'СВ-112'},
//     {id: 2, number: 'ТВ-123'},
//     {id: 3, number: 'ИИ 321'},
//     {id: 4, number: 'КК34556'},
// ]; 

  ngOnInit() {
    
  }

  

}

