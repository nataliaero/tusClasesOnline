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
      accessToken: 'accessToken',
      expiresIn: 123456789,
      tokenType: 'jwt',
    });
  }
}
