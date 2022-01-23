export enum DisplayActions {
  OPEN_ERROR_MODAL = 'OPEN_ERROR_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL'
}

export enum Modal {
  error = 'error'
}

export interface Error {
  title: string,
  message: string,
  details: string,
}

export interface DisplayState {
  error: Error | null,
  modal: Modal | null
}

export type DisplayAction =
  | { type: DisplayActions.OPEN_ERROR_MODAL, error: Error }
  | { type: DisplayActions.CLOSE_MODAL }