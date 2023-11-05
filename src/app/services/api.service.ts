import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    this.loadingSubject.next(true);
    return this.http.get(url).pipe(
      finalize(() => {
        this.loadingSubject.next(false);
      })
    );
  }

  // Add other API methods as needed
}
