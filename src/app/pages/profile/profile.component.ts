import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private GameSerive :gameService) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.getUser()
  }

  getUser(){
    this.GameSerive.getUserByemail('panward81@gmail.com').subscribe((user)=>  {
     console.log(user)
    })
  }
  submitForm() {
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      console.log(formData);
    }
  }


}
