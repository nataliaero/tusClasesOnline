import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Session } from '../session';

export interface LoginParams {
  username: string;
  password: string;
}

type Nil = null | undefined;

@Injectable()
export class AppLoginApiService {
  /**
   * If no session is returned, login failed.
   */
  login(params: LoginParams): Observable<Session | Nil> {
    return of({
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      tokenType: 'jwt',
    });
  }
}
