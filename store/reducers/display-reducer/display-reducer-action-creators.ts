import { DisplayAction, DisplayActions, Error, } from "./display-reducer-types"

class DisplayReducerActionCreator {
  openErrorModal(error: Error): DisplayAction {
    return {
      type: DisplayActions.OPEN_ERROR_MODAL,
      error
    }
  }
}

const displayReducerActionCreator = new DisplayReducerActionCreator()
export default displayReducerActionCreator