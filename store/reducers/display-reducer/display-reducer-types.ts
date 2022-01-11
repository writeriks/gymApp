export enum DisplayActions {
  SET_WORKOUT_TYPE = 'SET_WORKOUT_TYPE',
}


export interface DisplayState {
  workoutType: string | null
}

export type DisplayAction =
  | { type: DisplayActions.SET_WORKOUT_TYPE, workoutType: WorkoutType }


export enum WorkoutType {
  STRAIGHT = 'STRAIGHT',
  SUPERSET = 'SUPERSET',
  INTERVAL = 'INTERVAL',
}