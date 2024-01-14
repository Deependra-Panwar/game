// countdown.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable, Subscription } from 'rxjs';
import { GameIdService } from './gameId.service';
import { io } from "socket.io-client";
@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private timer: number = 0;
  private last30SecondsSubject = new BehaviorSubject<boolean>(false);
  private countdownInterval: Subscription;

  constructor(private gameIdService: GameIdService) {
    const socket = io('http://localhost:3000');
    socket.on("hello",(arg)=>{
     console.log(arg);
    });
    socket.on('intervalTime', (intervalTime: number,gameId:any)=>{
      console.log('intervalTime',intervalTime,gameId);
      this.timer= intervalTime;
     });
     socket.on('islast30second', (islast30second: number)=>{
      console.log('islast30second',islast30second);
     })
    this.startCountdown(60); // Start a 2-minute countdown when the service is created
  }

  private startCountdown(seconds: number) {
    this.timer = seconds;

    if (this.countdownInterval) {
      this.countdownInterval.unsubscribe(); // Stop the previous interval if it exists
    }

    this.countdownInterval = timer(0, 1000).subscribe(() => {
      this.timer--;
      this.last30SecondsSubject.next(this.isLast30Seconds());

      if (this.timer <= 0) {
        this.resetCountdown(); // Reset the countdown when it reaches 00:00
      }
    });
  }

  getRemainingTime(): Observable<number> {
    return new Observable(observer => {
      observer.next(this.timer);
      if (this.timer <= 0) {
        observer.complete();
      }
    });
  }

  isLast30Seconds(): boolean {
    return this.timer <= 30;
  }

  getLast30SecondsObservable(): Observable<boolean> {
    return this.last30SecondsSubject.asObservable();
  }

  resetCountdown():boolean {
    this.gameIdService.generateGameId();
    this.startCountdown(60); // Reset the countdown to 2 minutes
    return true;
  }

  stopCountdown() {
    if (this.countdownInterval) {
      this.countdownInterval.unsubscribe();
    }
  }

  getTime(): string {
    const formattedMinutes = Math.floor(this.timer / 60);
    const formattedSeconds = this.timer % 60;
    return `${formattedMinutes < 10 ? '0' : ''}${formattedMinutes}:${formattedSeconds < 10 ? '0' : ''}${formattedSeconds}`;
  }
}
