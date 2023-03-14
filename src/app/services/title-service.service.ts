import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor() {}

  title = new BehaviorSubject<string | null>(null);

  title$ = this.title.asObservable();
}
