import { createSelector } from 'reselect'
import { RootState } from '../reducers'

class RootStateReducer {
  getRootStateReducer = (state: RootState) => state;

  getDisplayReducer = createSelector(
    this.getRootStateReducer,
    (state) => state.display
  )

  getNewWorkoutReducer = createSelector(
    this.getRootStateReducer,
    (state) => state.newWorkout
  )
}

const rootStateReducer = new RootStateReducer()
export default rootStateReducer
