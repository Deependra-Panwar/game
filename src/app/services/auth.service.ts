import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http =inject(HttpClient)

  registerService(registerObj:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}register`,registerObj);
  }
  loginService(loginObj:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}login`,loginObj);
  }
  sendEmailservice(email:string){
    return this.http.post<any>(`${apiUrls.authServiceApi}send-Email`,{email:email});
  }
  resetPasswordService(resetObj:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}reset-password`,resetObj);
  }
  sendRegistrationEmailservice(email:string){
    return this.http.post<any>(`${apiUrls.authServiceApi}sendEmail`,{email:email});
  }
  verifyRegistrationEmailservice(data:any){
    console.log(data)
    return this.http.post<any>(`${apiUrls.authServiceApi}VerifyEmail`,data);
  }
  isLoggedIn(){
    return !!localStorage.getItem("user_id");
}
}
