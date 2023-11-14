import { Component, OnInit, ViewChild } from '@angular/core';
import { UserData } from '../game/game.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { gameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-admin-participant-list',
  templateUrl: './admin-participant-list.component.html',
  styleUrls: ['./admin-participant-list.component.scss']
})
export class AdminParticipantListComponent implements OnInit {
  displayedColumns: string[] = ['gameId', 'username', 'amountput','selection'];
  dataSource!: MatTableDataSource<UserData>;
  posts: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private GameService: gameService){
   
    this.GameService.adminGetAllParticipantList().subscribe((res:any)=>{
      
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
