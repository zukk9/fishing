import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {numbers} from '../../../../../data';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent implements OnInit {
  @Input() name: string | undefined; 
  @Input() number: string | undefined;

  _numbers = numbers;
  public searchTicket!: string;
 
  isTicket: boolean = false;
  getTicketName: string | undefined

  getTicetform!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.getTicetform = new FormGroup({
      numberOfPeople: new FormControl('', Validators.required),
      // numberOfDays: new FormControl('', Validators.required),
      // numberOfTicket: new FormControl('', Validators.required),
      privilege: new FormControl(''),
      daysfrom: new FormControl(''),
      daysto: new FormControl('')
      // getTicket: new FormControl('')
    })
    // this.numbers;
    
  }
  timestamp1: any; 
  timestamp2: any;
  diff: any;
  
  submit(){
    this.timestamp1 = new Date(this.getTicetform.value.daysfrom).getTime();
    this.timestamp2 = new Date(this.getTicetform.value.daysto).getTime();
    // var timestamp2 = new Date(this.getTicetform.daysto).getTime();
    this.diff = (this.timestamp2 - this.timestamp1) / 86400000;
    
    console.log(this.diff)
    
    // this._getTicketName = this._numbers.find(x => x.id == this.getTicetform);
    console.log(this.getTicetform.value.numberOfPeople)
    // console.log(this.getTicetform.value.numberOfDays)
    
    console.log(this.getTicetform.value.daysfrom)
    console.log(this.getTicetform.value.daysto)
    console.log(this.getTicetform.value.privilege)
    console.log(this.name)
    console.log(this.number)
  }
  
}
