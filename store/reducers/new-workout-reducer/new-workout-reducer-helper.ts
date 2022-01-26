import { NewStraightWorkout } from "./new-workout-reducer-types";
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

class NewWorkoutReducerHelper {
  findModifiedWorkoutSetIndex(newWorkoutSets: NewStraightWorkout[], newWorkoutSetId: string): number {
    return newWorkoutSets.findIndex((newWorkoutSet) => newWorkoutSet.id === newWorkoutSetId)
  }

  getEmptyNewWorkoutSet(): NewStraightWorkout {
    return {
      id: uuid(),
      repeat: null,
      weight: null,
    }
  }
}

const newWorkoutReducerHelper = new NewWorkoutReducerHelper()
export default newWorkoutReducerHelper;