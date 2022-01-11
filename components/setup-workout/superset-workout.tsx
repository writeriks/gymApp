import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { useDispatch } from 'react-redux'

import displayReducerActionCreator from '../../store/reducers/display-reducer/display-reducer-action-creators'

import { WorkoutType } from '../../store/reducers/display-reducer/display-reducer-types'

const SupersetWorkout = () => {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      dispatch(displayReducerActionCreator.setWorkoutType(WorkoutType.SUPERSET))
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
