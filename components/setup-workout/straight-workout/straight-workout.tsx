import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { useDispatch } from 'react-redux'

import displayReducerActionCreator from '../../../store/reducers/display-reducer/display-reducer-action-creators'

import { WorkoutType } from '../../../store/reducers/display-reducer/display-reducer-types'

const StraightWorkout = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isFocused) {
      dispatch(displayReducerActionCreator.setWorkoutType(WorkoutType.STRAIGHT))
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
