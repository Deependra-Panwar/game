import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isSidenavOpened = true;

  // Function to handle closing/opening sidenav triggered from the sidenav itself
  sidenavToggled() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
