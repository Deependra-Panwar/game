import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game';
  shouldShowComponent: boolean = true;
  showHeader: boolean = true;

  constructor(public loadingService: LoadingService,private router: Router ) {
  
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        const url = this.router.url;
        console.log('Current URL:', url);
  
        // Check if the URL contains 'admin'
        this.shouldShowComponent = !url.includes('admin');
        this.showHeader = !(url.includes('login' )|| url.includes('register' ) || url.includes('forget-password') || url.includes('set-password'));
      }
    });
  
   }
}
