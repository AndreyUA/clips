import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Component
import { AuthModalComponent } from 'src/app/user/auth-modal/auth-modal.component';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [CommonModule, SharedModule],
  exports: [AuthModalComponent],
})
export class UserModule {}
