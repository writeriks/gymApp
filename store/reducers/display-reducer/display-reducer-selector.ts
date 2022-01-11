import { createSelector } from 'reselect'
import rootStateReducer from '../root-reducer-selector'

class DisplayReducerSelector {
  getWorkoutType = createSelector(
    rootStateReducer.getDisplayReducer,
    (displayReducer) => displayReducer.workoutType
  );
}

const displayReducerSelector = new DisplayReducerSelector()
export default displayReducerSelector
