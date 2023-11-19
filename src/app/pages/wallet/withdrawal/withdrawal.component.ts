import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { walletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent {
  withdrawForm: FormGroup;

  constructor(private walletService: walletService) {
    this.withdrawForm = new FormGroup({
      amount: new FormControl('', [Validators.required, Validators.min(0.01)])
    });
  }

  submit() {
    if (this.withdrawForm.valid) {
      const amount = this.withdrawForm.value.amount;

      const data ={
        amount:this.withdrawForm.value.amount,
        email:'panward81@gmail.com',
      }             
      this.walletService.withdrawal(data).subscribe(((user)=>{
         console.log('Deposit successful');
      })
      );
    }
  }
}
