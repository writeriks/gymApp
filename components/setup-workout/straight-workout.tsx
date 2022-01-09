import { useIsFocused } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'

const StraightWorkout = () => {
  const isFocused = useIsFocused()
  console.log("🚀 ~ file: straight-workout.tsx ~ line 7 ~ StraightWorkout ~ isFocused", isFocused)
  return (
    <View>
      <Text>
        StraightWorkout
      </Text>
    </View>
  )
}

export default StraightWorkout
