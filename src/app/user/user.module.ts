import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { AuthModalComponent } from 'src/app/user/auth-modal/auth-modal.component';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [CommonModule],
  exports: [AuthModalComponent],
})
export class UserModule {}
