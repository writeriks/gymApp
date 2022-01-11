import { createSelector } from 'reselect'
import { RootState } from '../reducers'

class RootStateReducer {
  getRootStateReducer = (state: RootState) => state;

  getDisplayReducer = createSelector(
    this.getRootStateReducer,
    (state) => state.display
  )
}

const rootStateReducer = new RootStateReducer()
export default rootStateReducer
