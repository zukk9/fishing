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

  // _numbers = numbers;
  // public searchTicket!: string;
 
  // isTicket: boolean = false;
  // getTicketName: string | undefined

  timestamp1: any; 
  timestamp2: any;
  diff: any;
  getTicetform!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.getTicetform = new FormGroup({
      numberOfPeople: new FormControl('', Validators.required),      
      privilege: new FormControl(''),
      daysfrom: new FormControl(''),
      daysto: new FormControl('')     
    })    
    
  }
  
  submit(){
    this.timestamp1 = new Date(this.getTicetform.value.daysfrom).getTime();
    this.timestamp2 = new Date(this.getTicetform.value.daysto).getTime();
    // var timestamp2 = new Date(this.getTicetform.daysto).getTime();
    this.diff = (this.timestamp2 - this.timestamp1) / 86400000;
    
    
    console.log('ПІП:', this.name)
    console.log('Номер:',  this.number)    
    console.log('Кількість людей:', this.getTicetform.value.numberOfPeople)
    console.log('Дата з:', this.getTicetform.value.daysfrom)
    console.log('Дата по:', this.getTicetform.value.daysto)
    console.log('Кількіть днів:', this.diff)
    console.log('Пільга:', this.getTicetform.value.privilege)
  }
  
}
