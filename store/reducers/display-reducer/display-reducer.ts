import { DisplayAction, DisplayActions, DisplayState, Modal } from "./display-reducer-types"


const initialDisplayState = {
  error: null,
  modal: null
}

const displayReducer = (state: DisplayState = initialDisplayState, action: DisplayAction): DisplayState => {
  switch (action.type) {
    case DisplayActions.OPEN_ERROR_MODAL:
      return {
        ...state,
        error: action.error,
        modal: Modal.error
      }
    case DisplayActions.CLOSE_MODAL:
      return {
        ...state,
        error: null,
        modal: null
      }
    default:
      return state
  }
}

export default displayReducer