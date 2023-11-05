import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm!:FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router, private toastr : ToastrService) {}
  ngOnInit(): void {
    this.forgetForm = this.fb.group({    
      email: ['',Validators.compose([Validators.required, Validators.email])],
     })
  }
  onSubmit(forgetForm){
    this.authService.sendEmailservice(forgetForm.value.email).subscribe({
      next:(res)=>{
        alert(res.message);
        this.forgetForm .reset();
        this.router.navigate(['login']);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
