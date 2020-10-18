export interface Session {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface SessionJson {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export function deserializeSession(json: SessionJson): Session {
  return {
    accessToken: json.access_token,
    expiresIn: json.expires_in,
    tokenType: json.token_type,
  };
}

export function serializeSession(json: Session): SessionJson {
  return {
    access_token: json.accessToken,
    expires_in: json.expiresIn,
    token_type: json.tokenType,
  };
}
