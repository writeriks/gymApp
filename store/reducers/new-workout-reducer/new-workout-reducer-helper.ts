import { NewWorkoutSet } from "./new-workout-reducer-types";

class NewWorkoutReducerHelper {
  findModifiedWorkoutSetIndex(newWorkoutSets: NewWorkoutSet[], newWorkoutSetId: number): number {
    return newWorkoutSets.findIndex((newWorkoutSet) => newWorkoutSet.id === newWorkoutSetId)
  }
}

const newWorkoutReducerHeelper = new NewWorkoutReducerHelper()
export default newWorkoutReducerHeelper;