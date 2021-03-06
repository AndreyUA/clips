import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

// Components
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { TabsContainerComponent } from 'src/app/shared/tabs-container/tabs-container.component';
import { TabComponent } from 'src/app/shared/tab/tab.component';
import { InputComponent } from 'src/app/shared/input/input.component';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
  ],
})
export class SharedModule {}
