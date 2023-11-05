import { Component } from '@angular/core';
import { walletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent {
  transactions: any[] = [];

  constructor(private walletService: walletService) {}

  ngOnInit(): void {
    this.fetchTransactionHistory();
  }

  fetchTransactionHistory() {
    this.walletService.getTransactions().subscribe(
      (data: any) => {
        this.transactions = data.transactions;
      },
      (error: any) => {
        console.error('Error fetching transaction history', error);
        // Handle error, show error message, etc.
      }
    );
  }
}
