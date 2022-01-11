import { DisplayAction, DisplayActions, DisplayState } from "./display-reducer-types"


const initialDisplayState = {
  workoutType: null
}

const displayReducer = (state: DisplayState = initialDisplayState, action: DisplayAction): DisplayState => {
  switch (action.type) {
    case DisplayActions.SET_WORKOUT_TYPE: {
      return {
        ...state,
        workoutType: action.workoutType
      }
    }
    default:
      return state
  }
}

export default displayReducer