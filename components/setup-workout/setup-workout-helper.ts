import { store } from "../../store/createStore";

import newWorkoutReducerActionCreator from "../../store/reducers/new-workout-reducer/new-workout-reducer-action-creator";
import newWorkoutReducerHelper from "../../store/reducers/new-workout-reducer/new-workout-reducer-helper";

class SetupWorkoutHelper {
  appendNewStraightWorkoutSetRow(): void {
    // @ts-expect-error
    store.dispatch(newWorkoutReducerActionCreator.addNewStraightWorkoutSet([newWorkoutReducerHelper.getEmptyNewWorkoutSet()]))
  }

  modifyNewStraightWorkoutSetRepeat(repeat: string, newWorkoutSetId: string): void {
    // @ts-expect-error
    store.dispatch(newWorkoutReducerActionCreator.modifyNewStraightWorkoutRepeat(repeat, newWorkoutSetId))
  }

  modifyNewStraightWorkoutName(name: string): void {
    // @ts-expect-error
    store.dispatch(newWorkoutReducerActionCreator.modifyNewStraightWorkoutName(name))
  }

  modifyNewStraightWorkoutSetWeight(weight: string, newWorkoutSetId: string): void {
    // @ts-expect-error
    store.dispatch(newWorkoutReducerActionCreator.modifyNewStraightWorkoutWeight(weight, newWorkoutSetId))
  }

  removeNewStraightWorkoutSet(newWorkoutSetId: string): void {
    // @ts-expect-error
    store.dispatch(newWorkoutReducerActionCreator.removeNewStraightWorkoutSet(newWorkoutSetId))
  }
}

const setupWorkoutHelper = new SetupWorkoutHelper()
export default setupWorkoutHelper;