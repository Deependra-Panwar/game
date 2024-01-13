import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TakeAmmountComponent } from 'src/app/components/take-ammount/take-ammount.component';
import { CountdownService } from 'src/app/services/forntend-services/countdown.service';
import { GameIdService } from 'src/app/services/forntend-services/gameId.service';
import { gameService } from 'src/app/services/game.service';
import { walletService } from 'src/app/services/wallet.service';
export interface UserData {
  game: string;
  username: string;
  amoutput: any;
  selection: any;
}
@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss'],
})
export class WinComponent implements OnInit{
  displayedColumns: string[] = ['gameId','priceGiven', 'colorWin', 'color'];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  posts: any;
  makeButtonDisabled: boolean = false;
  last30Seconds: boolean = false;
  selectedButtonId: number | null = null;
  gameId:String;
  oldGameId:String;
  getWinner:number = 1;
  balance:any;
  email:any;

  constructor(private countdownService: CountdownService , private gameIdService: GameIdService, private GameService: gameService, private WalletService :walletService, private dialog: MatDialog) { 
    this.email =localStorage.getItem("user_id");
    this.GameService.getGameResult().subscribe((res:any)=>{
      console.log('data game',res.data)
      this.posts= res.data
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     })
     const data={email:this.email}
     WalletService.getBalance(data).subscribe((res:any)=>{
      this.balance = parseInt(res.data.balance) ;      
     })
    //  const socket = io('http://localhost:3000');
    // socket.on("hello",(arg)=>{
    //  console.log(arg);
    // })   
  }

  ngOnInit(): void {
    this.countdownService.getLast30SecondsObservable().subscribe(isLast30Seconds => {
      this.last30Seconds = isLast30Seconds;

      if(!this.last30Seconds){
        this.getWinner = 1;
      }
      if(this.last30Seconds && this.getWinner === 1){
        this.getWinner = 2
        this.GameService.getParticipantUserData(this.gameId).subscribe((res)=> {
          console.log('resss',res)
        })
      }
    });
    this.gameIdService.getGameIdObservable().subscribe((gameId) => {
      this.gameId = gameId;
      if(this.oldGameId !== this.gameId){
        this.makeButtonDisabled = false;
        this.oldGameId =this.gameId;  
      }
    });
    
  }
openPopup(id: number) {
  const dialogRef = this.dialog.open(TakeAmmountComponent, {
    data:{id:id,balance: this.balance,},
    panelClass: 'popup-dialog',
    maxHeight: '100%',
    width: '100%',
    position: {
      bottom: '0',
    },
  });

  dialogRef.afterClosed().subscribe(result => {
    // Handle the result if needed (the entered amount)
    if(result !== null && result.ammount< this.balance){
      const participantuser ={
        gameId:this.gameId,
        username:this.email,
        amountput: result.ammount,
        selection: result.selectNumber
      }
      this.makeButtonDisabled= true;
      const data ={
        amount:result.ammount,
        email:this.email
      }
      this.WalletService.deduction(data).subscribe((res:any)=>{
        if(res.status === 200){
          this.GameService.participantuserService(participantuser).subscribe((res)=>{

          })
        }
      })
    }
  });
}

  getTimeLeft() {
    return this.countdownService.getTime();
  }

  
}
