import { store } from "../../store/createStore";

import newWorkoutReducerActionCreator from "../../store/reducers/new-workout-reducer/new-workout-reducer-action-creator";
import newWorkoutReducerHelper from "../../store/reducers/new-workout-reducer/new-workout-reducer-helper";

class SetupWorkoutHelper {
  appendSetRow(): void {
    // @ts-expect-error
    store.dispatch(newWorkoutReducerActionCreator.addNewWorkoutSet([newWorkoutReducerHelper.getEmptyNewWorkoutSet()]))
  }

  modifyRepeat(repeat: string, newWorkoutSetId: string): void {
    // @ts-expect-error
    store.dispatch(newWorkoutReducerActionCreator.modifyWorkoutRepeat(repeat, newWorkoutSetId))
  }

  removeWorkoutSet(newWorkoutSetId: string): void {
    // @ts-expect-error
    store.dispatch(newWorkoutReducerActionCreator.removeWorkoutSet(newWorkoutSetId))
  }
}

const setupWorkoutHelper = new SetupWorkoutHelper()
export default setupWorkoutHelper;