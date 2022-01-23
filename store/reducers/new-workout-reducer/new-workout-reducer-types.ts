export enum NewWorkoutActions {
  SET_NEW_WORKOUT_TYPE = 'SET_NEW_WORKOUT_TYPE',
}


export interface NewWorkoutState {
  newWorkoutType: string | null
}

export type NewWorkoutAction =
  | { type: NewWorkoutActions.SET_NEW_WORKOUT_TYPE, newWorkoutType: WorkoutType }


export enum WorkoutType {
  STRAIGHT = 'STRAIGHT',
  SUPERSET = 'SUPERSET',
  INTERVAL = 'INTERVAL',
}