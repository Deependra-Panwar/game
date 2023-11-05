import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankDialogComponent } from '../bank-dialog/bank-dialog.component';

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.scss']
})
export class BankCardComponent {

constructor(private dialog: MatDialog) {}

openDialog(): void {
  const dialogRef = this.dialog.open(BankDialogComponent, {
    width: '400px',
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'update') {
      // Handle update logic
      // You can implement another dialog for updating account details
    } else if (result === 'delete') {
      // Handle delete logic
    }
  });
}

}
