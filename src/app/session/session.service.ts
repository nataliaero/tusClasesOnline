import { BehaviorSubject, Observable } from 'rxjs';
import { SESSION_STORAGE_ID, clearSession, saveSession } from './session-helper';
import { Session, deserializeSession } from './session.io';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { jwtHelperService } from './jwt';

type Nil = null | undefined;

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  // TODO check first cookies
  private sessionSubject$ = new BehaviorSubject(this.getSessionFromLocalStorage());

  private session$ = this.sessionSubject$.pipe(distinctUntilChanged());

  private getSessionFromLocalStorage(): Session | Nil {
    try {
      const data: string | null = window.localStorage.getItem(SESSION_STORAGE_ID);
      if (!data) {
        return null;
      }
      const session = deserializeSession(JSON.parse(data));
      if (jwtHelperService.isTokenExpired(session.accessToken)) {
        clearSession();
        return null;
      }
      return session;
    } catch (e) {
      console.warn('unable to get session from storage ', e);
      return null;
    }
  }

  getSession(): Observable<Readonly<Session> | Nil> {
    return this.session$;
  }

  setSession(session: Session): void {
    // TODO save session in cookies
    clearSession();
    saveSession(session);
    this.sessionSubject$.next(session);
  }
}
