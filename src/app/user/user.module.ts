import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Component
import { AuthModalComponent } from 'src/app/user/auth-modal/auth-modal.component';
import { LoginComponent } from 'src/app/user/login/login.component';
import { RegisterComponent } from 'src/app/user/register/register.component';

@NgModule({
  declarations: [AuthModalComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
  exports: [AuthModalComponent],
})
export class UserModule {}
