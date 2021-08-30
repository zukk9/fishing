import { Injectable } from "@angular/core";
import { dialog } from '../../../../data';
export interface Dialog {
    id: number,
    question: string,
    showQuestion: boolean,
    answer: boolean,
    isVoted: boolean
}

@Injectable({providedIn: "root"})
export class DialogService{

    // dialog = dialog;
    public dialog: Dialog[] = [
        {id: 1, question: 'question1', showQuestion: true, answer: true, isVoted: false},
        {id: 2, question: 'question2', showQuestion: false, answer: false, isVoted: false},
        {id: 3, question: 'question3', showQuestion: false, answer: true, isVoted: false}
    ]
    
    onVoted(id: number){
        const idx = this.dialog.findIndex(t=>t.id===id);
        if(this.dialog[idx].isVoted = false){
            this.dialog[idx].isVoted =  !this.dialog[idx].isVoted;
        }else{
            this.dialog[idx].isVoted = true
        }
    }
    onNo(id: number){        
        const idx = this.dialog.findIndex(t=>t.id===id);
        if(this.dialog[idx].answer = true){
            this.dialog[idx].answer = !this.dialog[idx].answer;
        }else{
            this.dialog[idx].answer = false
        }
    }
    onYes(id: number){
        const idx = this.dialog.findIndex(t=>t.id===id);
        if(this.dialog[idx].answer = false){
            this.dialog[idx].answer = !this.dialog[idx].answer;
        }else{
            this.dialog[idx].answer = true
        }  
    }
}