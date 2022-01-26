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

  modifyNewWorkoutDuration(duration: string, newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_DURATION,
      duration,
      newWorkoutSetId
    }
  }

  modifyNewWorkoutName(workoutName: string, newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_NAME,
      workoutName,
      newWorkoutSetId
    }
  }

  modifyNewWorkoutRepeat(repeat: string, newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_REPEAT,
      repeat,
      newWorkoutSetId
    }
  }

  modifyNewWorkoutWeight(weight: string, newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_WEIGHT,
      weight,
      newWorkoutSetId
    }
  }

  removeNewWorkoutSet(newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.REMOVE_NEW_WORKOUT_SET,
      newWorkoutSetId
    }
  }
}

const newWorkoutReducerActionCreator = new NewWorkoutReducerActionCreator()
export default newWorkoutReducerActionCreator