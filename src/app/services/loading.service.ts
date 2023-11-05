import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading = false;

  showLoader() {
    this.isLoading = true;
  }

  hideLoader() {
    this.isLoading = false;
  }
}
