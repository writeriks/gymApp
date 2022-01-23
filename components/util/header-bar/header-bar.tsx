import React from 'react'
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native'
import { headerBarStyle } from './header-bar-style'

interface HeaderBarProps {
  title: string,
  shouldHaveCloseIcon: boolean,
  navigation: () => void,
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, shouldHaveCloseIcon, navigation }) => (
  <View style={headerBarStyle.topBar}>
    <View style={headerBarStyle.topBarTitleTextView}>
      <Text style={headerBarStyle.topBarTitleText}>
        {title}
      </Text>
    </View>
    {
      shouldHaveCloseIcon &&
      <TouchableHighlight
        activeOpacity={1}
        underlayColor='transparent'
        style={headerBarStyle.topBarRightCloseButton}
        /* @ts-ignore */
        onPress={() => navigation.goBack()}
      >
        <View>
          <View style={headerBarStyle.closeElementFirst} ></View>
          <View style={headerBarStyle.closeElementSecond} ></View>
        </View>
      </TouchableHighlight>}
  </View>
)

export default HeaderBar
