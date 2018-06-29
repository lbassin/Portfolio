import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BackgroundService {

  subject: Subject<string>;

  constructor() {
    this.subject = new Subject<string>();
  }

  openBackground() {
    this.subject.next('out');
  }

  getObservable(): Observable<string> {
    return this.subject.asObservable();
  }

  closeBackground() {
    this.subject.next('void');
  }
}
