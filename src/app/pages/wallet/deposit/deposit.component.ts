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
      const amount = this.depositForm.value.amount;

      this.walletService.deposit(amount).subscribe(
        () => {
          // Deposit successful, you can show a success message or redirect the user
          console.log('Deposit successful');
        },
        (error: any) => {
          console.error('Error depositing funds', error);
          // Handle error, show error message, etc.
        }
      );
    }
  }
}
