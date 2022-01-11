import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { useDispatch } from 'react-redux'

import displayReducerActionCreator from '../../store/reducers/display-reducer/display-reducer-action-creators'

import { WorkoutType } from '../../store/reducers/display-reducer/display-reducer-types'

const IntervalWorkout = () => {
  const isFocus = useIsFocused()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isFocus) {
      dispatch(displayReducerActionCreator.setWorkoutType(WorkoutType.INTERVAL))
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
