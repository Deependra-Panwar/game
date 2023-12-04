import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { customEmailValidator } from 'src/app/validator/email-validtor';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm!:FormGroup;
  isvisible:boolean = false;
  isFieldDisabled:boolean = false;
  isverifyFieldDisabled:boolean = false;
  allowRegister: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
   this.registrationForm = this.fb.group({
    name:['', Validators.required],
    email: ['', [ customEmailValidator()]],
    mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    verifyEmail:['',[Validators.required, Validators.minLength(6)]],
    // username: ['', [Validators.required,Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    recommendationCode: [''],
    privacyPolicy: [false, Validators.requiredTrue]

   })
  }
  isEmailFieldNotEmpty() {
    const emailField = this.registrationForm.get('email');
    return emailField.value.trim() === '' || emailField.invalid;
  }

  sendRegisterEmail(){
    const emailField = this.registrationForm.get('email');
    if(emailField){
      this.authService.sendRegistrationEmailservice(emailField.value).subscribe({
        next:(res)=>{
          this.isvisible=true 
          this.isFieldDisabled= true 
        }
      })
    }
  
  }
  verifyRegisterEmail(){
    const emailField = this.registrationForm.get('email');
    const verifyEmailField = this.registrationForm.get('verifyEmail');
    let data ={
      email:emailField.value,
      code:verifyEmailField.value
     }
    this.authService.verifyRegistrationEmailservice(data).subscribe({
      next:(res)=>{
        if(res)
        {
          this.isverifyFieldDisabled= true
          this.allowRegister = true
        }
        
      }
    })
  }

  onSubmit(registrationForm) {
    this.authService.registerService(registrationForm.value).subscribe({
      next:(res)=>{
       this.openSnackBar(res.message,'ohk')
        this.registrationForm.reset();
        this.router.navigate(['login']);
      },
      error:(error)=>{
        console.log(error);
      }
    }) 
    console.log(registrationForm.value);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Set the duration for how long the snackbar will be displayed (in milliseconds)
    });
  }
}
