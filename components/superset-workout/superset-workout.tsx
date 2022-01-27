import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { useDispatch } from 'react-redux'

import newWorkoutReducerActionCreator from '../../store/reducers/new-workout-reducer/new-workout-reducer-action-creator'

import { WorkoutType } from '../../store/reducers/new-workout-reducer/new-workout-reducer-types'

const SupersetWorkout = () => {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      dispatch(newWorkoutReducerActionCreator.setNewWorkoutType(WorkoutType.SUPERSET))
    }
  })

  return (
    <View>
      <Text>
        SupersetWorkout
      </Text>
    </View>
  )
}

export default SupersetWorkout
