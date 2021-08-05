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
    this.ticketNumberValue = this._numbers.findIndex(obj => obj.number==this.getTicetSearchform.value.ticket);    

    if(this.ticketNumberValue==0){
      this.ticketNumberValue = this._numbers.find(x => x.number == this.getTicetSearchform.value.ticket);      
      this.name = this.ticketNumberValue.name;
      this.number = this.ticketNumberValue.number;     
      this.isHidden=false
      this.isNumber=true
    }else{
      this.isHidden=true
      this.isNumber=false
    }
    
    // СВ-112
    this.getTicetSearchform.reset();
    
  }
}
