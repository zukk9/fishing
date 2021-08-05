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
      numberOfDays: new FormControl('', Validators.required),
      // numberOfTicket: new FormControl('', Validators.required),
      privilege: new FormControl('')
      
      // getTicket: new FormControl('')
    })
    // this.numbers;
    
  }
  
  selectedTicket(){
    //this._getTicketId = this.numbers.filter(x=>x.completed==true).map(x=>x.id);
    // this._getTicketName = this._numbers.filter(x=>x.completed==true).map(x=>x.number);
    // if(!this._getTicketName){
    //   this.isTicket=true;
    // }else{
    //   this.isTicket=false;      
    // }

    // console.log(this.isTicket)

    //console.log(this._getTicketId)
    // console.log(this._getTicketName)
    // console.log(this.numbers)
  }
  getTicket(){
    // this._getTicketName = this._numbers.filter(x=>x.completed==true).map(x=>x.number);
    // this.TicketName.push(this._getTicketName);
    // console.log(this.TicketName)
    // if(!this._getTicketName){
    //   this.isTicket=true;
    // }else{
    //   this.isTicket=false;      
    // }
  }
  submit(){
    // this._getTicketName = this._numbers.find(x => x.id == this.getTicetform);
    console.log(this.getTicetform.value.numberOfPeople)
    console.log(this.getTicetform.value.numberOfDays)
    console.log(this.getTicetform.value.privilege)
    console.log(this.name)
    console.log(this.number)
  }
  
}
