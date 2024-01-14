import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent {
  panelOpenState= false;
  constructor( private router:Router,) {}
  logout() {
    localStorage.removeItem("user_id");
    this.router.navigate(['login']);
  }
}
