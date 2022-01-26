import newWorkoutReducerHelper from "./new-workout-reducer-helper"
import { NewWorkoutAction, NewWorkoutActions, NewWorkoutState } from "./new-workout-reducer-types"


const initialDisplayState = {
  newWorkoutType: null,
  newStraightWorkoutName: null,
  newStraightWorkoutSets: []
}

const newWorkoutReducer = (state: NewWorkoutState = initialDisplayState, action: NewWorkoutAction): NewWorkoutState => {
  switch (action.type) {
    case NewWorkoutActions.SET_NEW_WORKOUT_TYPE: {
      return {
        ...state,
        newWorkoutType: action.newWorkoutType
      }
    }
    case NewWorkoutActions.ADD_NEW_STRAIGHT_WORKOUT_SET: {
      const { newWorkoutSet } = action
      return {
        ...state,
        newStraightWorkoutSets: [
          ...state.newStraightWorkoutSets,
          ...newWorkoutSet
        ]
      }
    }

    case NewWorkoutActions.SET_NEW_STRAIGHT_WORKOUT_NAME: {
      const { newStraightWorkoutName } = action
      return {
        ...state,
        newStraightWorkoutName
      }
    }

    case NewWorkoutActions.MODIFY_NEW_STRAIGHT_WORKOUT_SET_REPEAT: {
      const newWorkoutSets = [...state.newStraightWorkoutSets]

      const { newWorkoutSetId, repeat } = action
      const index = newWorkoutReducerHelper.findModifiedWorkoutSetIndex(newWorkoutSets, newWorkoutSetId)
      newWorkoutSets[index].repeat = repeat;

      return {
        ...state,
        newStraightWorkoutSets: newWorkoutSets
      }
    }

    case NewWorkoutActions.MODIFY_NEW_STRAIGHT_WORKOUT_SET_WEIGHT: {
      const newWorkoutSets = [...state.newStraightWorkoutSets]

      const { newWorkoutSetId, weight } = action
      const index = newWorkoutReducerHelper.findModifiedWorkoutSetIndex(newWorkoutSets, newWorkoutSetId)
      newWorkoutSets[index].weight = weight;

      return {
        ...state,
        newStraightWorkoutSets: newWorkoutSets
      }
    }

    case NewWorkoutActions.REMOVE_NEW_WORKOUT_SET: {
      const newWorkoutSets = [...state.newStraightWorkoutSets]

      const { newWorkoutSetId } = action
      const index = newWorkoutReducerHelper.findModifiedWorkoutSetIndex(newWorkoutSets, newWorkoutSetId)
      newWorkoutSets.splice(index, 1)

      return {
        ...state,
        newStraightWorkoutSets: newWorkoutSets
      }
    }

    /*     case NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_NAME: {
          const newWorkoutSets = [...state.newStraightWorkoutSets]
    
          const { newWorkoutSetId, workoutName } = action
          const index = newWorkoutReducerHelper.findModifiedWorkoutSetIndex(newWorkoutSets, newWorkoutSetId)
          newWorkoutSets[index].workoutName = workoutName;
    
          return {
            ...state,
            newStraightWorkoutSets: newWorkoutSets
          }
        }
    
        case NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_DURATION: {
          const newWorkoutSets = [...state.newStraightWorkoutSets]
    
          const { newWorkoutSetId, duration } = action
          const index = newWorkoutReducerHelper.findModifiedWorkoutSetIndex(newWorkoutSets, newWorkoutSetId)
          newWorkoutSets[index].duration = duration;
    
          return {
            ...state,
            newStraightWorkoutSets: newWorkoutSets
          }
        } */

    default:
      return state
  }
}

export default newWorkoutReducer