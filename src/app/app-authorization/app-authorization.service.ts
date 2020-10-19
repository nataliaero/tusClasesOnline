import { CognitoUser, CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
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
export class AppAuthorizationService {
  private getUserPool(): CognitoUserPool {
    const poolData = {
      UserPoolId: USER_POOL_ID,
      ClientId: CLIENT_ID,
    };

    return new CognitoUserPool(poolData);
  }

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
    const userPool = this.getUserPool();

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

  confirm(username: string, confirmCode: string): void {
    const userPool = this.getUserPool();

    const userData = {
      Username: username,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(confirmCode, true, (err, res) => {
      console.log('err ', err);
      console.log('res ', res);
    });
  }
}
