export interface Session {
  accessToken: string;
  tokenType: string;
}

export interface SessionJson {
  access_token: string;
  token_type: string;
}

export function deserializeSession(json: SessionJson): Session {
  return {
    accessToken: json.access_token,
    tokenType: json.token_type,
  };
}

export function serializeSession(json: Session): SessionJson {
  return {
    access_token: json.accessToken,
    token_type: json.tokenType,
  };
}
