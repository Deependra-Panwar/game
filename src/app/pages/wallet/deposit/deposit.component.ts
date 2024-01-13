import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { QrCodeComponent } from 'src/app/components/qr-code/qr-code.component';
import { walletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {
  depositForm: FormGroup;
  paynowenable = false;
  email:any;
  constructor(private walletService: walletService,public dialog: MatDialog,private fb: FormBuilder) {
    this.email =localStorage.getItem("user_id");
    this.depositForm = this.fb.group({    
     email: [this.email, [Validators.required, Validators.email]],
     amount: ['',[Validators.required, Validators.min(6)]],
     transactionId:['',[Validators.required]],
     utrNumber:['',[Validators.required]]
     })
  }
  openDialog(): void {
    this.paynowenable = true;
    const dialogRef = this.dialog.open(QrCodeComponent, {
      width: '400',
      // You can add more configuration options here
    });

      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // Handle the result if needed
    });  
  }

  submit() {
    if(this.depositForm.valid) {
      const data ={
        amount:this.depositForm.value.amount,
        email:this.email,
        transactionId:this.depositForm.value.transactionId,
        utrNumber:this.depositForm.value.utrNumber
      }             
      this.walletService.deposit(data).subscribe(((res)=>{
          if(res){
            this.depositForm.reset()
          }
      })
      );
    }
  }
}
