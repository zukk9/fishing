import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {numbers} from '../../../../../data';
@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.sass']
})
export class SearchTicketComponent implements OnInit {
  getTicetSearchform!: FormGroup;
  ticketNumberValue: any; 
  _numbers = numbers;
  // adaptNumber: string | undefined;
  // trimNumber: string | undefined;
  name: string | undefined; 
  number: string | undefined;
  
  isHidden: boolean = false;
  isNumber: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.getTicetSearchform =  new FormGroup({
      ticket: new FormControl('', Validators.required)
    })
  }
  submit(){
    // this.trimNumber = this.getTicetSearchform.value.ticket.trim();
    // this.adaptNumber = this.getTicetSearchform.value.ticket.toLowerCase() || this.getTicetSearchform.value.ticket.toUpperCase();
    // this.adaptNumber = this.getTicetSearchform.value.ticket;
    // console.log(this.getTicetSearchform.value.ticket)
    this.ticketNumberValue = this._numbers.findIndex(obj => obj.number==this.getTicetSearchform.value.ticket);
    // 0 - founded
    // -1 didn't found
    // this.ticketNumberValue = this._numbers.indexOf(this.getTicetSearchform.value.ticket);
    // console.log(this.getTicetSearchform.value.ticket)
    // console.log(this.ticketNumberValue)    
    // console.log(this.ticketNumberValue.name)

    // console.log(this.ticketNumberValue)

    if(this.ticketNumberValue==0){
      this.ticketNumberValue = this._numbers.find(x => x.number == this.getTicetSearchform.value.ticket);
      // this.ticketNumberValue = this._numbers.find(x => x.number == this.getTicetSearchform.value.ticket);
      this.name = this.ticketNumberValue.name;
      this.number = this.ticketNumberValue.number;
      // console.log(this.ticketNumberValue.name)
      this.isHidden=false
      this.isNumber=true
    }else{
      this.isHidden=true
      this.isNumber=false     
      // console.log('error')
    }
    
    // СВ-112
    this.getTicetSearchform.reset();
    
  }
}
