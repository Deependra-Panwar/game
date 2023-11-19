import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GameIdService } from 'src/app/services/forntend-services/gameId.service';
import { gameService } from 'src/app/services/game.service';

export interface UserData {
  game: string;
  username: string;
  amoutput: any;
  selection: any;
}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})


export class GameComponent implements OnInit {
 
  displayedColumns: string[] = ['gameId', 'username', 'amountput','selection'];
  dataSource!: MatTableDataSource<UserData>;
  posts: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private GameService: gameService){
   
    this.GameService.adminGetAllGameWinnerList().subscribe((res:any)=>{
      console.log(res.data)
      this.posts= res.data
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     })
  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    //  throw new Error('Method not implemented.');
   }
 
}

