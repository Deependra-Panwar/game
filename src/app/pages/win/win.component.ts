import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { TakeAmmountComponent } from 'src/app/components/take-ammount/take-ammount.component';
import { CountdownService } from 'src/app/services/forntend-services/countdown.service';
import { GameIdService } from 'src/app/services/forntend-services/gameId.service';
import { gameService } from 'src/app/services/game.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss'],
})
export class WinComponent implements OnInit{

  constructor(private countdownService: CountdownService , private gameIdService: GameIdService, private GameService: gameService, private dialog: MatDialog) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  makeButtonDisabled: boolean = false;
  last30Seconds: boolean = false;
  selectedButtonId: number | null = null;
  gameId:String;
  oldGameId:String;
  getWinner:number=1;

  ngOnInit(): void {
    this.countdownService.getLast30SecondsObservable().subscribe(isLast30Seconds => {
      this.last30Seconds = isLast30Seconds;

      if(this.last30Seconds && this.getWinner ===1){
        this.GameService.getParticipantUserData(this.gameId).subscribe((res)=>{
          console.log('res',res)
          this.getWinner=2
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
    data:{id:id},
    panelClass: 'popup-dialog',
    maxHeight: '100%',
    width: '100%',
    position: {
      bottom: '0',
    },
  });

  dialogRef.afterClosed().subscribe(result => {
    // Handle the result if needed (the entered amount)
    if(result !== null){
      const participantuser ={
        gameId:this.gameId,
        username:'Deep@139',
        amountput: result.ammount,
        selection: result.selectNumber
      }
      this.makeButtonDisabled= true;
      this.GameService.participantuserService(participantuser).subscribe((res)=>{
        console.log('res',res)
      })
    }
  });
}

  getTimeLeft() {
    return this.countdownService.getTime();
  }

  
}
