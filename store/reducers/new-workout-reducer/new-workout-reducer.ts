import newWorkoutReducerHelper from "./new-workout-reducer-helper"
import { NewWorkoutAction, NewWorkoutActions, NewWorkoutState } from "./new-workout-reducer-types"


const initialDisplayState = {
  newWorkoutType: null,
  newWorkoutSets: []
}

const newWorkoutReducer = (state: NewWorkoutState = initialDisplayState, action: NewWorkoutAction): NewWorkoutState => {
  switch (action.type) {
    case NewWorkoutActions.SET_NEW_WORKOUT_TYPE: {
      return {
        ...state,
        newWorkoutType: action.newWorkoutType
      }
    }
    case NewWorkoutActions.ADD_NEW_WORKOUT_SET: {
      const { newWorkoutSet } = action
      return {
        ...state,
        newWorkoutSets: [
          ...state.newWorkoutSets,
          ...newWorkoutSet
        ]
      }
    }
    case NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_NAME: {
      const newWorkoutSets = [...state.newWorkoutSets]

      const { newWorkoutSetId, workoutName } = action
      const index = newWorkoutReducerHelper.findModifiedWorkoutSetIndex(newWorkoutSets, newWorkoutSetId)
      newWorkoutSets[index].workoutName = workoutName;

      return {
        ...state,
        newWorkoutSets
      }
    }

    case NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_DURATION: {
      const newWorkoutSets = [...state.newWorkoutSets]

      const { newWorkoutSetId, duration } = action
      const index = newWorkoutReducerHelper.findModifiedWorkoutSetIndex(newWorkoutSets, newWorkoutSetId)
      newWorkoutSets[index].duration = duration;

      return {
        ...state,
        newWorkoutSets
      }
    }

    case NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_REPEAT: {
      const newWorkoutSets = [...state.newWorkoutSets]

      const { newWorkoutSetId, repeat } = action
      const index = newWorkoutReducerHelper.findModifiedWorkoutSetIndex(newWorkoutSets, newWorkoutSetId)
      newWorkoutSets[index].duration = repeat;

      return {
        ...state,
        newWorkoutSets
      }
    }

    case NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_WEIGHT: {
      const newWorkoutSets = [...state.newWorkoutSets]

      const { newWorkoutSetId, weight } = action
      const index = newWorkoutReducerHelper.findModifiedWorkoutSetIndex(newWorkoutSets, newWorkoutSetId)
      newWorkoutSets[index].duration = weight;

      return {
        ...state,
        newWorkoutSets
      }
    }

    case NewWorkoutActions.REMOVE_NEW_WORKOUT_SET: {
      const newWorkoutSets = [...state.newWorkoutSets]

      const { newWorkoutSetId } = action
      const index = newWorkoutReducerHelper.findModifiedWorkoutSetIndex(newWorkoutSets, newWorkoutSetId)
      newWorkoutSets.splice(index, 1)

      return {
        ...state,
        newWorkoutSets
      }
    }
    default:
      return state
  }
}

export default newWorkoutReducer