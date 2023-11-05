import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
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
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router, private toastr : ToastrService) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({    
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
     })
  }

  onSubmit(loginForm) {
    this.authService.loginService(loginForm.value).subscribe({
      next:(res)=>{
        console.log('hello');
        console.log(res.message);
        alert(res.message);
        this.loginForm.reset();
        this.router.navigate(['win']);
      },
      error:(error)=>{
      console.log('hello');
        console.log(error);
      }
    }) 
    console.log(loginForm.value);
  }
}
