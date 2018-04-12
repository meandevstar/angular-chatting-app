import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IsLoggedInGuard } from './core/guards/is-logged-in.guard';
import { IsNotLoggedInGuard } from './core/guards/is-not-logged-in.guard';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [IsLoggedInGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsNotLoggedInGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [IsNotLoggedInGuard] },
  { path: '**', redirectTo: 'login' }
];
