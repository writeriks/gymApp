import { NewWorkoutActions, NewStraightWorkout, WorkoutType } from "./new-workout-reducer-types"

class NewWorkoutReducerActionCreator {
  setNewWorkoutType(newWorkoutType: WorkoutType) {
    return {
      type: NewWorkoutActions.SET_NEW_WORKOUT_TYPE,
      newWorkoutType
    }
  }

  addNewStraightWorkoutSet(newWorkoutSet: NewStraightWorkout[]) {
    return {
      type: NewWorkoutActions.ADD_NEW_STRAIGHT_WORKOUT_SET,
      newWorkoutSet
    }
  }

  modifyNewStraightWorkoutName(newStraightWorkoutName: string) {
    return {
      type: NewWorkoutActions.SET_NEW_STRAIGHT_WORKOUT_NAME,
      newStraightWorkoutName,
    }
  }

  modifyNewStraightWorkoutRepeat(repeat: string, newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.MODIFY_NEW_STRAIGHT_WORKOUT_SET_REPEAT,
      repeat,
      newWorkoutSetId
    }
  }

  modifyNewStraightWorkoutWeight(weight: string, newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.MODIFY_NEW_STRAIGHT_WORKOUT_SET_WEIGHT,
      weight,
      newWorkoutSetId
    }
  }

  removeNewStraightWorkoutSet(newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.REMOVE_NEW_WORKOUT_SET,
      newWorkoutSetId
    }
  }

  modifyNewWorkoutDuration(duration: string, newWorkoutSetId: string) {
    return {
      type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_DURATION,
      duration,
      newWorkoutSetId
    }
  }


}

const newWorkoutReducerActionCreator = new NewWorkoutReducerActionCreator()
export default newWorkoutReducerActionCreator