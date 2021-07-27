import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {CustomPipe} from '../filter.pipe';

export interface Numbers {
  id: number,
  number: string,
  completed: boolean
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent implements OnInit {
  public searchTicket!: string;
  TicketId: any[] = [];
  TicketName: any[] = [];; 
  _getTicketId = this.TicketId;
  _getTicketName = this.TicketName;
  
  getTicetform!: FormGroup;
  
  // numbers!: Numbers[];
  // getNember(){
  //   this.numbers = [
  //     {id: 1, number: 'СВ-112', completed: false},
  //     {id: 2, number: 'ТВ-123', completed: false,},
  //     {id: 3, number: 'ИИ 321', completed: false,},
  //     {id: 4, number: 'КК34556', completed: false,},
  // ]; 
  // }
  
  public numbers: Numbers[] = [
    {id: 1, number: 'СВ-112', completed: false},
    {id: 2, number: 'ТВ-123', completed: false,},
    {id: 3, number: 'ИИ 321', completed: false,},
    {id: 4, number: 'КК34556', completed: false,},
]; 

  constructor() { }

  ngOnInit(): void {
    this.getTicetform = new FormGroup({
      numberOfPeople: new FormControl('', Validators.required),
      numberOfDays: new FormControl('', Validators.required),
      numberOfTicket: new FormControl('', Validators.required),
      // getTicket: new FormControl('')
    })
    this.numbers;
  }
  submit(){
    console.log(this.getTicetform.value)
    console.log(this._getTicketName)
    // this._getTicket = this.numbers.filter(x=>x.completed==true).map(x=>x.id);
    // console.log(this.getTicetform)
  }
  selectedTicket(){
    //this._getTicketId = this.numbers.filter(x=>x.completed==true).map(x=>x.id);
    this._getTicketName = this.numbers.filter(x=>x.completed==true).map(x=>x.number);
    
    // console.log(this._getTicketName)

    //console.log(this._getTicketId)
    // console.log(this._getTicketName)
    // console.log(this.numbers)
  } 
  
}
