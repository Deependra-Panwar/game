import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { walletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {
  depositForm: FormGroup;
  constructor(private walletService: walletService) {
    this.depositForm = new FormGroup({
      amount: new FormControl('', [Validators.required, Validators.min(0.01)])
    });
  }
  submit() {
    if (this.depositForm.valid) {
      const data ={
        amount:this.depositForm.value.amount,
        email:'panward81@gmail.com',
      }             
      this.walletService.deposit(data).subscribe(((res)=>{
          if(res){
            this.depositForm.reset()
          }
      })
      );
    }
  }
}
