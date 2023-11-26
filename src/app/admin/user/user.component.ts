import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { userService } from 'src/app/services/user.service';
import { AdminDialogComponent } from '../shared/admin-dialog/admin-dialog.component';
export interface UserData {
  createdAt: String,
  email: String,
  isAdmin: Boolean,
  mobileNumber: String,
  name:String,
  password:String,
  privacyPolicy: Boolean,
  recommendationCode:String,
  roles: []
  updatedAt: String,
  userName: String,
  __v: Number,
  _id: String
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit  {
  displayedColumns: string[] = ['name', 'username', 'mobilename','email','recommendationCode','actions'];
  dataSource!: MatTableDataSource<UserData>;
  posts: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor( private UserService: userService, public dialog: MatDialog ){
    this.getAlluser()
  }

   getAlluser(){
    this.UserService.adminGetAllUser().subscribe((res:any)=>{
      
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
   openDialog(action: string): void {
    let data: any = {};

    switch (action) {
      case 'edit':
        // Show form for update action
        data = {
          title: 'Update Item',
          type: 'form',
          // You can pass necessary data for the update form
          // For example: existing item details to be updated
        };
        break;
      case 'delete':
        // Show confirmation dialog for delete action
        data = {
          title: 'Delete Item',
          message: 'Are you sure you want to delete this item?',
          cancelText: 'No',
          confirmText: 'Yes',
          type: 'confirmation',
          showConfirm: true,
          username:'Deep@123'
        };
        break;
      case 'block':
        // Show confirmation dialog for block action
        data = {
          title: 'Block Item',
          message: 'Are you sure you want to block this item?',
          cancelText: 'No',
          confirmText: 'Yes',
          type: 'confirmation',
          showConfirm: true,
          username:'Deep@123'
        };
        break;
      // Add more cases for other actions
      default:
        break;
    }

    const dialogRef = this.dialog.open(AdminDialogComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.UserService.adminDeleteById(data.username).subscribe((res:any)=>{
           if(res.message === "Delete user Successfully"){
            this.getAlluser();
           }
         })
        // Perform action based on result
        if (action === 'delete') {
          // Perform delete action

        } else if (action === 'block') {
          // Perform block action
        } else if (action === 'edit') {
          // Show form or perform update action
        }
      }
    });
  }
}
