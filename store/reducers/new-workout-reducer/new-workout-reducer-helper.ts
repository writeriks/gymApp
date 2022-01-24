import { NewWorkoutSet } from "./new-workout-reducer-types";
import { v4 as uuid } from 'uuid'

class NewWorkoutReducerHelper {
  findModifiedWorkoutSetIndex(newWorkoutSets: NewWorkoutSet[], newWorkoutSetId: string): number {
    return newWorkoutSets.findIndex((newWorkoutSet) => newWorkoutSet.id === newWorkoutSetId)
  }

  getEmptyNewWorkoutSet(): NewWorkoutSet {
    return {
      id: uuid(),
      workoutName: null,
      duration: null,
      repeat: null,
      weight: null,
    }
  }
}

const newWorkoutReducerHelper = new NewWorkoutReducerHelper()
export default newWorkoutReducerHelper;