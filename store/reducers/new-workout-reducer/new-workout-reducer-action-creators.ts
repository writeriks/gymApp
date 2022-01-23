import { NewWorkoutActions, WorkoutType } from "./new-workout-reducer-types"

class NewWorkoutReducerActionCreator {
  setNewWorkoutType(newWorkoutType: WorkoutType) {
    return {
      type: NewWorkoutActions.SET_NEW_WORKOUT_TYPE,
      newWorkoutType
    }
  }
}

const newWorkoutReducerActionCreator = new NewWorkoutReducerActionCreator()
export default newWorkoutReducerActionCreator