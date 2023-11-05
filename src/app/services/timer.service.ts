// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TimerService {
//   private minutes: number = 2;
//   private seconds: number = 0;
//   private interval: any;

//   constructor() {
//     this.startTimer();
//   }

//   startTimer() {
//     this.interval = setInterval(() => {
//       if (this.minutes === 0 && this.seconds === 0) {
//         this.resetTimer();
//       } else {
//         if (this.seconds === 0) {
//           this.minutes--;
//           this.seconds = 59;
//         } else {
//           this.seconds--;
//         }
//       }
//     }, 1000); // Update every 1 second
//   }

//   resetTimer() {
//     clearInterval(this.interval);
//     this.minutes = 2;
//     this.seconds = 0;
//     this.startTimer();
//   }

//   getTime() {
//     const formattedMinutes = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
//     const formattedSeconds = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
//     return `${formattedMinutes}:${formattedSeconds}`;
//   }
// }
