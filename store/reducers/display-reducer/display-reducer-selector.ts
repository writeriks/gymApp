import { createSelector } from 'reselect'
import rootStateReducer from '../root-reducer-selector'

class DisplayReducerSelector {
  getError = createSelector(
    rootStateReducer.getDisplayReducer,
    (display) => display.error
  );

  getModal = createSelector(
    rootStateReducer.getDisplayReducer,
    (display) => display.modal
  )
}

const displayReducerSelector = new DisplayReducerSelector()
export default displayReducerSelector
