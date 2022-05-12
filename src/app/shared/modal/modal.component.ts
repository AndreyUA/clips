import { Component, OnInit } from '@angular/core';

// Services
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(public readonly modal: ModalService) {
    console.log(this.modal.visible);
  }

  ngOnInit(): void {}
}
