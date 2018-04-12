import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { validateEmail, validatePassword } from '../helpers/validate';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  confirmPass: string;
  nameError: string;
  emailError: string;
  passwordError: string;
  confirmPassError: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.nameError = '';
    this.emailError = '';
    this.passwordError = '';
    this.confirmPassError = '';
  }

  signup() {
    if (this.validate()) {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      this.authService.signup(payload);
    }
  }

  validate() {
    if (!this.email) {
      this.emailError = 'Required';
      return false;
    } else if (!validateEmail(this.email)) {
      this.emailError = 'Invalid email';
      return false;
    }

    if (!this.password) {
      this.passwordError = 'Required';
      return false;
    } else if (!validatePassword(this.password)) {
      this.passwordError = 'Password should be more than 8 chractors';
      return false;
    }

    if (this.password !== this.confirmPass) {
      this.confirmPassError = 'Password does not match';
      return false;
    }

    return true;
  }

}
