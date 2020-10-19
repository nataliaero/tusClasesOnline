import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Session } from '../session';
import { environment } from '../../environments/environment';

export interface LoginParams {
  username: string;
  password: string;
}

type Nil = null | undefined;

const CLIENT_ID = environment.clientId;
const USER_POOL_ID = environment.userPoolId;

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

  register(params: LoginParams): void {
    const poolData = {
      UserPoolId: USER_POOL_ID,
      ClientId: CLIENT_ID,
    };

    const userPool = new CognitoUserPool(poolData);

    const attributeList = [];

    const attributeEmail = {
      Name: 'email',
      Value: params.username,
    };
    attributeList.push(new CognitoUserAttribute(attributeEmail));

    userPool.signUp(params.username, params.password, attributeList, null, (err, res) => {
      console.log('err', err);
      console.log('res', res);
    });
  }
}
