import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RulesDialogComponent } from '../rules-dialog/rules-dialog.component';
import {CdkDrag, CdkDragEnd} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
  standalone: true,
  imports: [CdkDrag],
})
export class RulesComponent {
  position:{ x: number; y: number; } | undefined;
  newPosition:{ x: number; y: number; } | undefined;
   constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.position,this.newPosition);
  }

  openDialog(): void {
      if(this.newPosition!==this.position && this.newPosition!== undefined){
        this.position= this.newPosition;
       console.log('true');
      }  
      else{
        const dialogRef = this.dialog.open(RulesDialogComponent, {
          width: '100%',
          data: {}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          // Do something with the result if needed
        });
      } 
  }
  
  onDragEnded(event: CdkDragEnd): void {
    const element = event.source.element.nativeElement as HTMLElement;
    this.newPosition = this.getElementPosition(element);
    console.log('Element dragged to new position:', this.newPosition, this.position);
  }

  private getElementPosition(element: HTMLElement): { x: number, y: number } {
    const rect = element.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
  }
}
