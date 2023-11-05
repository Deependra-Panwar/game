import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-rules-dialog',
  templateUrl: './rules-dialog.component.html',
  styleUrls: ['./rules-dialog.component.scss']
})
export class RulesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RulesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onDialogClose(): void {
    this.dialogRef.close();
  }
}
