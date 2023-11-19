import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CountdownService } from 'src/app/services/forntend-services/countdown.service';

@Component({
  selector: 'app-take-ammount',
  templateUrl: './take-ammount.component.html',
  styleUrls: ['./take-ammount.component.scss']
})
export class TakeAmmountComponent {
  enteredAmount: number = 10; // Set the default value to 10
  islast30seconds:boolean;
  selectNumber:number
  balance:any;
  displayMsg:boolean= false;
  constructor(private dialogRef: MatDialogRef<TakeAmmountComponent>, private countdownService: CountdownService, @Inject(MAT_DIALOG_DATA) data: any) {
    this.selectNumber= data.id
    this.balance=data.balance
  //  this.islast30seconds = countdownService.isLast30Seconds();
  
    setInterval(() => {
      this.islast30seconds = countdownService.isLast30Seconds();
      if (this.islast30seconds) {
        this.dialogRef.close(null);
        return;
      }
    }, 1000);
  }
  
  increaseAmount() {
    this.enteredAmount += 10;
  }

  decreaseAmount() {
    if (this.enteredAmount > 10) {
      this.enteredAmount -= 10;
    }
  }

  selectAmount(amount: number) {
    this.enteredAmount = amount;
  }

  submitAmount() {
    const Selectresult ={
      selectNumber:this.selectNumber,
      ammount:this.enteredAmount
    }
    if(this.enteredAmount < this.balance){
      this.dialogRef.close(Selectresult);
    }else{
      this.displayMsg =true
    }
    
  }

  closePopup() {
    this.dialogRef.close(null);
  }

  isSubmitDisabled() {
    return this.enteredAmount <= 0;
  }
}
