import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSubmitting: boolean = false;
  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_password = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13),
  ]);
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
  });
  showAlert: boolean = false;
  alertMsg: string = 'Please wait! Your account is being created.';
  alertColor: string = 'blue';

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async register(): Promise<void> {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created.';
    this.alertColor = 'blue';

    this.isSubmitting = true;

    if (
      !this.registerForm.get('email')?.value ||
      !this.registerForm.get('password')?.value
    ) {
      return;
    }

    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(
        this.registerForm.get('email')?.value as string,
        this.registerForm.get('password')?.value as string
      );

      console.log(userCredential);
    } catch (error) {
      console.log(error);

      this.alertMsg = 'An unexpected error.';
      this.alertColor = 'red';

      this.isSubmitting = false;

      return;
    }

    this.alertMsg = 'Account has been created.';
    this.alertColor = 'green';
  }
}
