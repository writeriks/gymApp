import React, { useEffect } from 'react'
import { TouchableWithoutFeedback, View, Keyboard } from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { ScrollView, TextInput } from 'react-native-gesture-handler'
import StraightWorkoutSetRow from './straight-workout-set-row/straight-workout-set-row'
import StraightworkoutTitleWithButton from './straight-workout-title-with-button/straight-workout-title-with-button'

import newWorkoutReducerActionCreator from '../../store/reducers/new-workout-reducer/new-workout-reducer-action-creator'
import newWorkoutReducerSelector from '../../store/reducers/new-workout-reducer/new-workout-reducer-selector'
import straightWorkoutHelper from './straight-workout-helper'

import { WorkoutType } from '../../store/reducers/new-workout-reducer/new-workout-reducer-types'
import { straightWorkoutStyle } from './straight-workout-style'

const StraightWorkout = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()

  const newWorkoutSets = useSelector(newWorkoutReducerSelector.getNewStraightWorkoutSets)
  const straightWorkoutName = useSelector(newWorkoutReducerSelector.getNewStraightWorkoutName)

  useEffect(() => {
    if (isFocused) {
      dispatch(newWorkoutReducerActionCreator.setNewWorkoutType(WorkoutType.STRAIGHT))
    }
  }, [isFocused])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={straightWorkoutStyle.mainView}>
        <StraightworkoutTitleWithButton
          titleName='Sets'
        />

        <View style={straightWorkoutStyle.workoutTitleContainer}>
          <TextInput
            style={straightWorkoutStyle.workoutTitleInput}
            value={straightWorkoutName}
            onChange={(e) => straightWorkoutHelper.modifyNewStraightWorkoutName(e.nativeEvent.text)}
            placeholder='Workout Name' />
        </View>

        <ScrollView style={straightWorkoutStyle.scrollView}>
          {newWorkoutSets.map((workoutSet, index) =>
            <View key={workoutSet.id}>
              <StraightWorkoutSetRow newWorkoutSet={workoutSet} index={index} />
            </View>
          )}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StraightWorkout
