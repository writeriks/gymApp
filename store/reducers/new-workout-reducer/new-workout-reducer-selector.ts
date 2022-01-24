import { createSelector } from 'reselect'
import rootStateReducer from '../root-reducer-selector'

class NewWorkoutReducerSelector {
  getNewWorkoutType = createSelector(
    rootStateReducer.getNewWorkoutReducer,
    (newWorkout) => newWorkout.newWorkoutType
  );
  getNewWorkoutSets = createSelector(
    rootStateReducer.getNewWorkoutReducer,
    (newWorkout) => newWorkout.newWorkoutSets
  );
}

const newWorkoutReducerSelector = new NewWorkoutReducerSelector()
export default newWorkoutReducerSelector
