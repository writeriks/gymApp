import { NewWorkoutAction, NewWorkoutActions, NewWorkoutState } from "./new-workout-reducer-types"


const initialDisplayState = {
  newWorkoutType: null
}

const newWorkoutReducer = (state: NewWorkoutState = initialDisplayState, action: NewWorkoutAction): NewWorkoutState => {
  switch (action.type) {
    case NewWorkoutActions.SET_NEW_WORKOUT_TYPE: {
      return {
        ...state,
        newWorkoutType: action.newWorkoutType
      }
    }
    default:
      return state
  }
}

export default newWorkoutReducer