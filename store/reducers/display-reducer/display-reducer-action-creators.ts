import { DisplayActions, WorkoutType } from "./display-reducer-types"

class DisplayReducerActionCreator {
  setWorkoutType(workoutType: WorkoutType) {
    return {
      type: DisplayActions.SET_WORKOUT_TYPE,
      workoutType
    }
  }
}

const displayReducerActionCreator = new DisplayReducerActionCreator()
export default displayReducerActionCreator