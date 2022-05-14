import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Component
import { AuthModalComponent } from 'src/app/user/auth-modal/auth-modal.component';
import { LoginComponent } from 'src/app/user/login/login.component';
import { RegisterComponent } from 'src/app/user/register/register.component';

@NgModule({
  declarations: [AuthModalComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, SharedModule],
  exports: [AuthModalComponent],
})
export class UserModule {}
