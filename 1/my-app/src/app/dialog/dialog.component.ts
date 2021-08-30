import { Component, OnInit } from '@angular/core';
import { dialog } from '../../../../../data';
import { DialogService } from '../app.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {
  dialog = dialog;  
  constructor(public dialogService: DialogService) { }
  
  ngOnInit(): void {
  }
  onVoted(id: number){
    this.dialogService.onVoted(id)
  }
  onNo(id: number){
    this.dialogService.onNo(id)
  }
  onYes(id: number){
    this.dialogService.onYes(id)
  }
  
  // onNo(){
  //   console.log(false);
  // }
  // onYes(){
  //   console.log(true)
  // }

}
