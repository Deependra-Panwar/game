import { Component, OnInit } from '@angular/core';
import { walletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit{
  balance: number =0;
  constructor(private walletService: walletService) {
      // Fetch the balance on component initialization
      this.fetchBalance();
  }
  
  fetchBalance() {
    const data={
      email:'panward81@gmail.com'
    }
    this.walletService.getBalance(data).subscribe((res: any) => {
      console.log(res)
        this.balance = parseInt(res.data.balance) ;
        console.log(this.balance)
      },
    );
  }

  ngOnInit(): void {
  
  }
}
