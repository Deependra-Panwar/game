import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { participantsUserApiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
})
 export class gameService{
    http =inject(HttpClient)

//win component service
participantuserService(participantuserObj:any){
    return this.http.post<any>(`${participantsUserApiUrls.gameServiceApi}participantUser`,participantuserObj);
  } 

//get all the user partcipantuser
getParticipantUserData(gameId: String){
  return this.http.get(`${participantsUserApiUrls.gameServiceApi}getParticipantUser/${gameId}`);
} 
}
 