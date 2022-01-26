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
    store.dispatch(newWorkoutReducerActionCreator.modifyNewWorkoutRepeat(repeat, newWorkoutSetId))
  }

  modifyWeight(weight: string, newWorkoutSetId: string): void {
    // @ts-expect-error
    store.dispatch(newWorkoutReducerActionCreator.modifyNewWorkoutWeight(weight, newWorkoutSetId))
  }

  removeNewWorkoutSet(newWorkoutSetId: string): void {
    // @ts-expect-error
    store.dispatch(newWorkoutReducerActionCreator.removeNewWorkoutSet(newWorkoutSetId))
  }
}

const setupWorkoutHelper = new SetupWorkoutHelper()
export default setupWorkoutHelper;