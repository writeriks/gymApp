import { store } from "../../store/createStore";
import newWorkoutReducerActionCreator from "../../store/reducers/new-workout-reducer/new-workout-reducer-action-creators";
import newWorkoutReducerHelper from "../../store/reducers/new-workout-reducer/new-workout-reducer-helper";

class SetupWorkoutHelper {
  appendSetRow(): void {
    // @ts-expect-error
    store.dispatch(newWorkoutReducerActionCreator.addNewWorkoutSet([newWorkoutReducerHelper.getEmptyNewWorkoutSet()]))
  }
}

const setupWorkoutHelper = new SetupWorkoutHelper()
export default setupWorkoutHelper;