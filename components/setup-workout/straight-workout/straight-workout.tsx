import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { useDispatch } from 'react-redux'

import newWorkoutReducerActionCreator from '../../../store/reducers/new-workout-reducer/new-workout-reducer-action-creators'

import { WorkoutType } from '../../../store/reducers/new-workout-reducer/new-workout-reducer-types'

const StraightWorkout = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isFocused) {
      dispatch(newWorkoutReducerActionCreator.setNewWorkoutType(WorkoutType.STRAIGHT))
    }
  })

  return (
    <View>
      <Text>
        StraightWorkout
      </Text>
    </View>
  )
}

export default StraightWorkout
