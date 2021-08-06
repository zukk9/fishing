import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  constructor() { }
  

  ngOnInit(): void {
    this.form = new FormGroup({
      number: new FormControl('', Validators.required),
      full_name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      personal: new FormControl('', Validators.required)
    })
  }
  submit(){ 
    console.log('fORMS:', this.form);  
    console.log('Номер:', this.form.value.number.toUpperCase().trim());   
    console.log('ПІП:', this.form.value.full_name);
    console.log('Місце:', this.form.value.location);
    console.log('Згода:', this.form.value.personal);
  }
  
}


