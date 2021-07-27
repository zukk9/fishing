import { Component, OnInit } from '@angular/core';
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
      full_name: new FormControl('', Validators.required)
    })
  }
  submit(){
    if(this.form.valid){

      console.log(this.form);
    }
    console.log(this.form);
  }

  

}
