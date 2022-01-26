import React, { useEffect } from 'react'
import { Text, TouchableWithoutFeedback, View, Keyboard } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { useDispatch, useSelector } from 'react-redux'

import newWorkoutReducerActionCreator from '../../../store/reducers/new-workout-reducer/new-workout-reducer-action-creator'

import { WorkoutType } from '../../../store/reducers/new-workout-reducer/new-workout-reducer-types'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { straightWorkoutStyle } from './straight-workout-style'
import SetupworkoutTitleWithButton from '../setup-workout-title-with-button/setup-workout-title-with-button'
import newWorkoutReducerSelector from '../../../store/reducers/new-workout-reducer/new-workout-reducer-selector'
import SetupWorkoutSetRow from '../setup-workout-set-row/setup-workout-set-row'

const StraightWorkout = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()

  const newWorkoutSets = useSelector(newWorkoutReducerSelector.getNewWorkoutSets)

  useEffect(() => {
    if (isFocused) {
      dispatch(newWorkoutReducerActionCreator.setNewWorkoutType(WorkoutType.STRAIGHT))
    }
  }, [isFocused])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={straightWorkoutStyle.mainView}>
        <SetupworkoutTitleWithButton
          titleName='Sets'
        />

        <View style={straightWorkoutStyle.workoutTitleContainer}>
          <TextInput
            style={straightWorkoutStyle.workoutTitleInput}
            placeholder='Workout Name' />
        </View>

        <ScrollView style={straightWorkoutStyle.scrollView}>
          {newWorkoutSets.map((workoutSet, index) =>
            <View key={workoutSet.id}>
              <SetupWorkoutSetRow newWorkoutSet={workoutSet} index={index} />
            </View>
          )}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StraightWorkout
