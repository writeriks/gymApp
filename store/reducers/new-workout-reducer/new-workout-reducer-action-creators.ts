import { NewWorkoutActions, NewWorkoutSet, WorkoutType } from "./new-workout-reducer-types"

class NewWorkoutReducerActionCreator {
  setNewWorkoutType(newWorkoutType: WorkoutType) {
    return {
      type: NewWorkoutActions.SET_NEW_WORKOUT_TYPE,
      newWorkoutType
    }
  }

  addNewWorkoutSet(newWorkoutSet: NewWorkoutSet[]) {
    return {
      type: NewWorkoutActions.ADD_NEW_WORKOUT_SET,
      newWorkoutSet
    }
  }

  modifyDuration(duration: string, newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_DURATION,
      duration,
      newWorkoutSetId
    }
  }

  modifyWorkoutName(workoutName: string, newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_NAME,
      workoutName,
      newWorkoutSetId
    }
  }

  modifyWorkoutRepeat(repeat: string, newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_REPEAT,
      repeat,
      newWorkoutSetId
    }
  }
}

const newWorkoutReducerActionCreator = new NewWorkoutReducerActionCreator()
export default newWorkoutReducerActionCreator