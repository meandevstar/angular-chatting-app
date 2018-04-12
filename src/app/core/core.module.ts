import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { IsNotLoggedInGuard } from './guards/is-not-logged-in.guard';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    AuthService,
    IsLoggedInGuard,
    IsNotLoggedInGuard
  ],
  declarations: []
})
export class CoreModule { }
