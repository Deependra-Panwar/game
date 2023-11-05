import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { walletApiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
})
 export class walletService{
    http =inject(HttpClient)

//win component service
getBalance(){
    return this.http.get(`${walletApiUrls.gameServiceApi}/balance`);
  }
  deposit(amount){
    return this.http.post<any>(`${walletApiUrls.gameServiceApi}/deposit`,amount);
  } 
  withdrawal(amount){
    return this.http.post<any>(`${walletApiUrls.gameServiceApi}/withdrwal`,amount);
  }
  getTransactions() {
    return this.http.get(`${walletApiUrls.gameServiceApi}/transactions`);
  }
}
 