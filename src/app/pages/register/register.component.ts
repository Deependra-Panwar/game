import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!:FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router, private toastr : ToastrService) {}

  ngOnInit(): void {
   this.registrationForm = this.fb.group({
    name:['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    username: ['', [Validators.required,Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    recommendationCode: [''],
    privacyPolicy: [false, Validators.requiredTrue]

   })
  }

  onSubmit(registrationForm) {
    this.authService.registerService(registrationForm.value).subscribe({
      next:(res)=>{
        alert(res.message);
        this.registrationForm.reset();
        this.router.navigate(['login']);
      },
      error:(error)=>{
        console.log(error);
      }
    }) 
    console.log(registrationForm.value);
  }
}
