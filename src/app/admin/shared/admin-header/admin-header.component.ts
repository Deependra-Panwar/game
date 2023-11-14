import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  isSidenavOpened = false;

  toggle() {
    this.isSidenavOpened = !this.isSidenavOpened;
    this.toggleSidenav.emit();
  }
}
