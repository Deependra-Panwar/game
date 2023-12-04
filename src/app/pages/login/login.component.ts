import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router, private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({    
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
     })
  }

  onSubmit(loginForm) {
    this.authService.loginService(loginForm.value).subscribe({
      next:(res)=>{
       localStorage.setItem("user_id",res.data.email)
       this.openSnackBar(res.message,'ok')
        this.loginForm.reset();
        this.router.navigate(['win']);
      },
      error:(error)=>{
        console.log(error);
      }
    }) 
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Set the duration for how long the snackbar will be displayed (in milliseconds)
    });
  }
}
