import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { useDispatch } from 'react-redux'

import newWorkoutReducerActionCreator from '../../../store/reducers/new-workout-reducer/new-workout-reducer-action-creators'

import { WorkoutType } from '../../../store/reducers/new-workout-reducer/new-workout-reducer-types'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler'
import { straightWorkoutStyle } from './straight-workout-style'

const StraightWorkout = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isFocused) {
      dispatch(newWorkoutReducerActionCreator.setNewWorkoutType(WorkoutType.STRAIGHT))
    }
  })

  return (
    <ScrollView style={straightWorkoutStyle.mainView}>
      <View style={straightWorkoutStyle.setContainer}>
        <Text style={straightWorkoutStyle.setsText}>
          SETS
        </Text>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor='white'
          /* @ts-ignore */
          onPress={() => console.log("ADD")} >
          <Text style={straightWorkoutStyle.addButton}>
            Add Set
          </Text>
        </TouchableHighlight>
      </View>


    </ScrollView>
  )
}

export default StraightWorkout
