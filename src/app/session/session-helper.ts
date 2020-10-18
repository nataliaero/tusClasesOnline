import { Session, serializeSession } from './session.io';

const SESSION_STORAGE_ID = '@tusClasesOnline/session';

export function saveSession(session: Session): void {
  try {
    localStorage.setItem(SESSION_STORAGE_ID, JSON.stringify(serializeSession(session)));
  } catch (error) {
    console.warn('Can not store session ', error);
  }
}

export function clearSession(): void {
  localStorage.clear();
}
