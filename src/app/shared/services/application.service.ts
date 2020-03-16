import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private navStateSource = new BehaviorSubject<string>('');
  navState = this.navStateSource.asObservable();
  constructor() { }

  setNavBarState(state: string) {
    this.navStateSource.next(state);
  }
}
