import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { useDispatch, useSelector } from 'react-redux'

import newWorkoutReducerActionCreator from '../../../store/reducers/new-workout-reducer/new-workout-reducer-action-creators'

import { WorkoutType } from '../../../store/reducers/new-workout-reducer/new-workout-reducer-types'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { straightWorkoutStyle } from './straight-workout-style'
import SetupworkoutTitleWithButton from '../setup-workout-title-with-button/setup-workout-title-with-button'
import newWorkoutReducerSelector from '../../../store/reducers/new-workout-reducer/new-workout-reducer-selector'
import SetupWorkoutSetRow from '../setup-workout-set-row'

const StraightWorkout = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()

  const workoutSets = useSelector(newWorkoutReducerSelector.getNewWorkoutSets)

  useEffect(() => {
    if (isFocused) {
      dispatch(newWorkoutReducerActionCreator.setNewWorkoutType(WorkoutType.STRAIGHT))
    }
  }, [isFocused])

  return (
    <View style={straightWorkoutStyle.mainView}>
      <SetupworkoutTitleWithButton
        titleName='Sets'
      />
      <ScrollView style={straightWorkoutStyle.scrollView}>
        {workoutSets.map((workoutSet, index) =>
          <>
            <Text>{index + 1}</Text>
            <SetupWorkoutSetRow newWorkoutSet={workoutSet} />
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default StraightWorkout
