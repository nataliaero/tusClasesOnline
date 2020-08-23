import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isMobile$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
    map(result => result.matches),
    distinctUntilChanged(),
    shareReplay({ refCount: true, bufferSize: 1 }),
  );

  isTablet$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.TabletPortrait])
    .pipe(
      map(result => result.matches),
      distinctUntilChanged(),
      shareReplay({ refCount: true, bufferSize: 1 }),
    );

  isMobileOrTablet$: Observable<boolean> = combineLatest([this.isMobile$, this.isTablet$]).pipe(
    map(([isMobile, isTablet]) => isMobile || isTablet),
  );
}
