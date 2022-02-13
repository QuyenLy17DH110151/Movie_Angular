import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor() {}

  ObOne(): Observable<string> {
    return new Observable<string>((s) => {
      setTimeout(() => {
        s.next('One');
      }, 2000);
    });
  }

  ObTwo(name: string): Observable<number> {
    let i = 0;
    return new Observable<number>((s) => {
      if (name) {
        setInterval(() => {
          s.next(i++);
        }, 1000);
      }
    });
  }
}
