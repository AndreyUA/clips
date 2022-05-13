import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  private modals: Array<IModal> = [];

  isModalOpen(id: string): boolean {
    return this.modals.find((modal) => modal.id === id)?.visible ?? false;
  }

  toggleModal(id: string): void {
    const modal = this.modals.find((modal) => modal.id === id);

    if (modal) modal.visible = !modal.visible;
  }

  register(id: string): void {
    this.modals.push({ id, visible: false });
  }

  unregister(id: string): void {
    this.modals = this.modals.filter((modal) => modal.id !== id);
  }
}
