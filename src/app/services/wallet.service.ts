import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { adminApiUrls, walletApiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
})
 export class walletService{
    http =inject(HttpClient)

//win component service
getBalance(data:any){
    return this.http.post(`${walletApiUrls.gameServiceApi}balance`,data);
  }
  deposit(data:any){
    return this.http.post<any>(`${walletApiUrls.gameServiceApi}deposit`,data);
  } 
  withdrawal(data:any){
    return this.http.post<any>(`${walletApiUrls.gameServiceApi}withdrawal`,data);
  }
  getTransactions(data:any) {
    return this.http.post(`${walletApiUrls.gameServiceApi}transactions`,data);
  }
  deduction(data:any){
    return this.http.post(`${walletApiUrls.gameServiceApi}deduction`,data);
  }


  //admin
  adminGetAllWalletList(){
    return this.http.get(`${adminApiUrls.adminServiceApi}getAllWalletList`)
  }
  adminApproveDeposit(data:any){
    return this.http.post(`${adminApiUrls.adminServiceApi}approveDeposit`,data)
  }

  
}
 