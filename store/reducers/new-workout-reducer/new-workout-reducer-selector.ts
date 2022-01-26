import { createSelector } from 'reselect'
import rootStateReducer from '../root-reducer-selector'

class NewWorkoutReducerSelector {
  getNewWorkoutType = createSelector(
    rootStateReducer.getNewWorkoutReducer,
    (newWorkout) => newWorkout.newWorkoutType
  );
  getNewStraightWorkoutSets = createSelector(
    rootStateReducer.getNewWorkoutReducer,
    (newWorkout) => newWorkout.newStraightWorkoutSets
  );
  getNewStraightWorkoutName = createSelector(
    rootStateReducer.getNewWorkoutReducer,
    (newWorkout) => newWorkout.newStraightWorkoutName
  );
}

const newWorkoutReducerSelector = new NewWorkoutReducerSelector()
export default newWorkoutReducerSelector
