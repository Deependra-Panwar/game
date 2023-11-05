import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: [{ value: 'your_username', disabled: true }],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  submitForm() {
    if (this.profileForm.valid) {
      // You can send the form data to your backend or perform other actions here
      // For example, you can access form values like this:
      const formData = this.profileForm.value;
      console.log(formData);
    }
  }
}
