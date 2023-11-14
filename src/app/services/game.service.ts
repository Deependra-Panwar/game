import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { participantsUserApiUrls, adminApiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
})
 export class gameService{
    http =inject(HttpClient)

//win component service
participantuserService(participantuserObj:any){
    return this.http.post<any>(`${participantsUserApiUrls.gameServiceApi}participantUser`,participantuserObj);
} 



//get all partcipantuser by id
getParticipantUserData(gameId: String){
  return this.http.get(`${participantsUserApiUrls.gameServiceApi}getParticipantUser/${gameId}`);
} 

//admin - password

//get all participantUser
adminGetAllParticipantList(){
  return this.http.get(`${adminApiUrls.adminServiceApi}getAllParticipantList`);
}
adminGetAllGameWinnerList(){
  return this.http.get(`${adminApiUrls.adminServiceApi}getAllGameWinnerList`);
}
}
 