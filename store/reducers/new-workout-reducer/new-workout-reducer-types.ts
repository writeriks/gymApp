export enum NewWorkoutActions {
  SET_NEW_WORKOUT_TYPE = 'SET_NEW_WORKOUT_TYPE',
  ADD_NEW_STRAIGHT_WORKOUT_SET = 'ADD_NEW_STRAIGHT_WORKOUT_SET',
  SET_NEW_STRAIGHT_WORKOUT_NAME = 'SET_NEW_STRAIGHT_WORKOUT_NAME',
  MODIFY_NEW_WORKOUT_SET_NAME = 'MODIFY_NEW_WORKOUT_SET_NAME',
  MODIFY_NEW_STRAIGHT_WORKOUT_SET_WEIGHT = 'MODIFY_NEW_STRAIGHT_WORKOUT_SET_WEIGHT',
  MODIFY_NEW_STRAIGHT_WORKOUT_SET_REPEAT = 'MODIFY_NEW_STRAIGHT_WORKOUT_SET_REPEAT',
  MODIFY_NEW_WORKOUT_SET_DURATION = 'MODIFY_NEW_WORKOUT_SET_DURATION',
  REMOVE_NEW_WORKOUT_SET = 'REMOVE_NEW_WORKOUT_SET',
}

export interface NewWorkoutState {
  newWorkoutType: string | null,
  newStraightWorkoutName: string,
  newStraightWorkoutSets: NewStraightWorkout[]
}

export interface NewStraightWorkout {
  id: string,
  weight?: string,
  repeat?: string,
}


export type NewWorkoutAction =
  | { type: NewWorkoutActions.SET_NEW_WORKOUT_TYPE, newWorkoutType: WorkoutType }
  | { type: NewWorkoutActions.ADD_NEW_STRAIGHT_WORKOUT_SET, newWorkoutSet: NewStraightWorkout[] }
  | { type: NewWorkoutActions.SET_NEW_STRAIGHT_WORKOUT_NAME, newStraightWorkoutName: string }
  | { type: NewWorkoutActions.MODIFY_NEW_STRAIGHT_WORKOUT_SET_WEIGHT, weight: string, newWorkoutSetId: string }
  | { type: NewWorkoutActions.MODIFY_NEW_STRAIGHT_WORKOUT_SET_REPEAT, repeat: string, newWorkoutSetId: string }
  | { type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_NAME, workoutName: string, newWorkoutSetId: string }
  | { type: NewWorkoutActions.MODIFY_NEW_WORKOUT_SET_DURATION, duration: string, newWorkoutSetId: string }
  | { type: NewWorkoutActions.REMOVE_NEW_WORKOUT_SET, newWorkoutSetId: string }


export enum WorkoutType {
  STRAIGHT = 'STRAIGHT',
  SUPERSET = 'SUPERSET',
  INTERVAL = 'INTERVAL',
}