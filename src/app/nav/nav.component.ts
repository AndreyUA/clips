import { Component, OnInit } from '@angular/core';

// Services
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public readonly modal: ModalService) {}

  openModal($event: Event): void {
    $event.preventDefault();

    this.modal.toggleModal();
  }

  ngOnInit(): void {}
}
