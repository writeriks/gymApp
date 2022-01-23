import { createSelector } from 'reselect'
import rootStateReducer from '../root-reducer-selector'

class DisplayReducerSelector {
  getNewWorkoutType = createSelector(
    rootStateReducer.getNewWorkoutReducer,
    (newWorkout) => newWorkout.newWorkoutType
  );
}

const displayReducerSelector = new DisplayReducerSelector()
export default displayReducerSelector
