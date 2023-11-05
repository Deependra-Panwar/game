import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { confirPasswordValidator } from 'src/app/validator/custom-password-validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!:FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router, private toastr : ToastrService, private acctivatedroute: ActivatedRoute) {}
  token:string;

  ngOnInit(): void {
    this.acctivatedroute.params.subscribe(val=>{
      this.token =val['token'];
      console.log(this.token );
    })
    this.resetForm = this.fb.group({    
      password: ['',Validators.required],
      confimPassword: ['',Validators.required]
     },
     {
        Validator : confirPasswordValidator('password','confimPassword')
     })
  }
  onSubmit(resetForm){
    let resetobj={
      token:this.token,
      password: this.resetForm.value.password
    }
    this.authService.resetPasswordService(resetobj).subscribe({
      next:(res)=>{
        alert(res.message);
        this.resetForm .reset();
        this.router.navigate(['login']);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
