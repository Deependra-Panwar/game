import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { adminApiUrls, participantsUserApiUrls } from '../api.urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 export class userService{
    http =inject(HttpClient) 

//get all customber User
adminGetAllUser(){
  return this.http.get(`${adminApiUrls.adminServiceApi}allUser`);
}

adminDeleteById(userId: string){
  return this.http.delete(`${adminApiUrls.adminServiceApi}deleteUser/${userId}`);
}
adminUpdateById(userId: string, updatedData: any){
  return this.http.put(`${adminApiUrls.adminServiceApi}updateUser/${userId}`,updatedData);
}
}
 