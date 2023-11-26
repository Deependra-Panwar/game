import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { walletService } from 'src/app/services/wallet.service';

interface ApprovalRequest {
  id: number;
  email: string;
  wallet: {
    transactionId: string;
    status: 'pending' | 'approved' | 'rejected';
    approved : boolean;
  };
}

@Component({
  selector: 'app-request-approval',
  templateUrl: './request-approval.component.html',
  styleUrls: ['./request-approval.component.scss']
})
export class RequestApprovalComponent implements OnInit {
  approvalForm: FormGroup;
  displayedColumns: string[] = ['email', 'transactionId', 'status', 'requestType', 'dates', 'actions'];
  dataSource!: MatTableDataSource<ApprovalRequest>;
  allTransactions:any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder, private WalletService: walletService) {
    this.approvalForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      transactionId: ['', Validators.required]
    });
    this.AllWalletList();
  }

  AllWalletList() {
    this.WalletService.adminGetAllWalletList().subscribe((res: any) => {

      const email = res.data.email; // The email information you want to add
      const transactionsArrays = res.data.map(item => {
        const transactions = item.wallet?.transactions || [];
        const email = item.email


        // Add email property to each transaction
        return transactions.map(transaction => ({ ...transaction, email }));
      });

      // Flatten the array of transaction arrays into a single array
      this.allTransactions = transactionsArrays.flat();

      // Now 'allTransactions' is an array containing all transactions from each object in 'res.data' with an added 'email' property
      this.dataSource = new MatTableDataSource(this.allTransactions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  approveRequest(request: any) {
    const requestData = {
      email: request.email,
      transactionId: request._id,
      requestType: request.type,
    };
    this.WalletService.adminApproveDeposit(requestData).subscribe((res)=>{
        console.log(res)
    })
    
  }

  rejectRequest(request: ApprovalRequest) {
    // Handle rejection logic and update the status
  }

  isPending(status: string): boolean {
    return status === 'pending';
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {
    // Load approval requests from your backend or another source
  }
}
