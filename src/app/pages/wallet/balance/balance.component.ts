import { Component, OnInit } from '@angular/core';
import { walletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit{
  balance: number = 0;
  constructor(private walletService: walletService) {}
  ngOnInit(): void {
    // Fetch the balance on component initialization
    this.fetchBalance();
  }
  fetchBalance() {
    this.walletService.getBalance().subscribe((data: any) => {
        this.balance = data.balance;
        console.log(this.balance)
      },
    );
  }
}
