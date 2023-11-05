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

      this.walletService.withdrawal(amount).subscribe(
        () => {
          // Withdrawal successful, you can show a success message or redirect the user
          console.log('Withdrawal successful');
        },
        (error: any) => {
          console.error('Error withdrawing funds', error);
          // Handle error, show error message, etc.
        }
      );
    }
  }
}
