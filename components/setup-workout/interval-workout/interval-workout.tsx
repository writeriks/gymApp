import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { useDispatch } from 'react-redux'

import newWorkoutReducerActionCreator from '../../../store/reducers/new-workout-reducer/new-workout-reducer-action-creators'

import { WorkoutType } from '../../../store/reducers/new-workout-reducer/new-workout-reducer-types'

const IntervalWorkout = () => {
  const isFocus = useIsFocused()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isFocus) {
      dispatch(newWorkoutReducerActionCreator.setNewWorkoutType(WorkoutType.INTERVAL))
    }
  }, [isFocus])

  return (
    <View>
      <Text>
        IntervalWorkout
      </Text>
    </View>
  )
}

export default IntervalWorkout
