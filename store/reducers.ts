import { combineReducers } from 'redux'
import displayReducer from './reducers/display-reducer/display-reducer'

export const reducers = combineReducers({
  display: displayReducer
})

export type RootState = ReturnType<typeof reducers>
