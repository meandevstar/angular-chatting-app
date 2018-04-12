import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { validateEmail, validatePassword } from '../helpers/validate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  emailError: string;
  passwordError: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.emailError = '';
    this.passwordError = '';
  }

  login() {
    if (this.validate()) {
      const payload = {
        email: this.email,
        password: this.password
      };

      this.authService.login(payload);
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

    return true;
  }

}
