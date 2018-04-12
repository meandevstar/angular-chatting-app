import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';
import { User } from '../../models';

@Injectable()
export class AuthService {

  user$: BehaviorSubject<User>;
  error$: BehaviorSubject<Error>;

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.user$ = new BehaviorSubject(null);
    this.error$ = new BehaviorSubject(null);
  }

  hasToken(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  login(payload: any) {
    localStorage.setItem('accessToken', '----------- fakeToken ----------')
  }

  signup(payload: any) {

  }

  signOut() {
    localStorage.clear();

    this.router.navigate(['login']);
  }

  isLoggedIn() {
    return this.hasToken();
  }
}
