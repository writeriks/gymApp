import { combineReducers } from 'redux'
import displayReducer from './reducers/display-reducer/display-reducer'
import newWorkoutReducer from './reducers/new-workout-reducer/new-workout-reducer'

export const reducers = combineReducers({
  display: displayReducer,
  newWorkout: newWorkoutReducer
})

export type RootState = ReturnType<typeof reducers>
