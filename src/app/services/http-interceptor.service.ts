import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.showLoader();

    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.hideLoader();
      })
    );
  }
}
