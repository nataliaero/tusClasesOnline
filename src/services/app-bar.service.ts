import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppBarService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  private changeStyle$ = new BehaviorSubject<boolean>(false);

  getStyle(): boolean {
    return this.changeStyle$.value;
  }

  updateStyle(value: boolean): void {
    this.changeStyle$.next(value);
  }
}
