import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
@Injectable()
export class GameIdService {
  private currentYear: number;
  private currentMonth: number;
  private currentNumber: number;
  private gameIdSubject: BehaviorSubject<string>;

  constructor() {
    this.gameIdSubject = new BehaviorSubject<string>('');
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    this.currentNumber = 1;
    const socket = io('http://localhost:3000');
    socket.on('intervalTime', (intervalTime: number,gameId:any)=>{
      console.log('intervalTime',intervalTime,gameId);
      this.currentNumber = gameId;
     });
    this.generateGameId();
  }

  generateGameId(): void {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    if (year === this.currentYear && month === this.currentMonth) {
      this.currentNumber++;
    } else {
      this.currentYear = year;
      this.currentMonth = month;
      this.currentNumber = 1;
    }

    // const formattedNumber = this.currentNumber.toString().padStart(5, '0');
    // const gameId = `${year}${month}${formattedNumber}`;

    this.gameIdSubject.next(this.currentNumber.toString());
  }

  getGameIdObservable(): Observable<string> {
    return this.gameIdSubject.asObservable();
  }
}
