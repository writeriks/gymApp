import { store } from "../../store/createStore"
import newWorkoutReducerHelper from "../../store/reducers/new-workout-reducer/new-workout-reducer-helper"
import newWorkoutReducerActionCreator from "../../store/reducers/new-workout-reducer/new-workout-reducer-action-creator"


class StraightWorkoutHelper {
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

const straightWorkoutHelper = new StraightWorkoutHelper()
export default straightWorkoutHelper;