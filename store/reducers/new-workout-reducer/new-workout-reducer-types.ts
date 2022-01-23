export enum NewWorkoutActions {
  SET_NEW_WORKOUT_TYPE = 'SET_NEW_WORKOUT_TYPE',
  ADD_NEW_WORKOUT_SET = 'ADD_NEW_WORKOUT_SET',
  MODIFY_NEW_WORKOUT_SET_NAME = 'MODIFY_NEW_WORKOUT_SET_NAME',
  MODIFY_NEW_WORKOUT_SET_WEIGHT = 'MODIFY_NEW_WORKOUT_SET_WEIGHT',
  MODIFY_NEW_WORKOUT_SET_REPEAT = 'MODIFY_NEW_WORKOUT_SET_REPEAT',
  MODIFY_NEW_WORKOUT_SET_DURATION = 'MODIFY_NEW_WORKOUT_SET_DURATION',
  REMOVE_NEW_WORKOUT_SET = 'REMOVE_NEW_WORKOUT_SET',
}

export interface NewWorkoutState {
  newWorkoutType: string | null,
  newWorkoutSets: NewWorkoutSet[]
}

export interface NewWorkoutSet {
  id: number,
  workoutName: string,
  weight?: string,
  repeat?: string,
  duration?: string,
}


export type NewWorkoutAction =
  | { type: NewWorkoutActions.SET_NEW_WORKOUT_TYPE, newWorkoutType: WorkoutType }
  | { type: NewWorkoutActions.ADD_NEW_WORKOUT_SET, newWorkoutSet: NewWorkoutSet }
  | { type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_NAME, workoutName: string, newWorkoutSetId: number }
  | { type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_WEIGHT, weight: string, newWorkoutSetId: number }
  | { type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_REPEAT, repeat: string, newWorkoutSetId: number }
  | { type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_DURATION, duration: string, newWorkoutSetId: number }
  | { type: NewWorkoutActions.REMOVE_NEW_WORKOUT_SET, newWorkoutSetId: number }


export enum WorkoutType {
  STRAIGHT = 'STRAIGHT',
  SUPERSET = 'SUPERSET',
  INTERVAL = 'INTERVAL',
}