import { Component } from '@angular/core';
import { walletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent {
  transactions: any[] = [];
  constructor(private walletService: walletService) {
    this.fetchTransactionHistory();
  }
  fetchTransactionHistory() {
    const data ={
      email:'panward81@gmail.com'
    }
    this.walletService.getTransactions(data).subscribe((res:any)=>{
        if(res){
          const transactionArrays = res.data.balance;
          this.transactions =transactionArrays.flat()

        }
               console.log(this.transactions)  
    });
  }
  ngOnInit(): void {
    this.fetchTransactionHistory();
  }
}
