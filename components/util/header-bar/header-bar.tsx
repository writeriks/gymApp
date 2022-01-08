import React from 'react'
import { Image, Text, TouchableHighlight, View, StyleSheet } from 'react-native'

interface HeaderBarProps {
  title: string,
  shouldHaveCloseIcon: boolean,
  navigation: () => void,
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, shouldHaveCloseIcon, navigation }) => {
  const styles = StyleSheet.create({
    topBar: {
      position: 'absolute',
      width: '100%',
      height: 64,
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(216, 216, 216)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    topBarTitleTextView: {
      position: 'absolute',
      alignSelf: 'center',

    },
    topBarTitleText: {
      color: 'rgb(28, 28, 30)',
      fontSize: 18,
      fontWeight: '500',
    },
    topBarRightCloseButton: {
      alignSelf: 'flex-end',
      position: 'absolute',
      right: 15,
      width: 40,
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    closeElementFirst: {
      position: 'absolute',
      width: 30,
      height: 5,
      backgroundColor: 'black',
      transform: [{ rotateX: '45deg' }, { rotateY: '45deg' }]
    },
    closeElementSecond: {
      position: 'absolute',
      width: 30,
      height: 5,
      backgroundColor: 'black',
      transform: [{ rotateX: '-45deg' }, { rotateY: '45deg' }]
    }
  })
  return (
    <View style={styles.topBar}>
      <View style={styles.topBarTitleTextView}>
        <Text style={styles.topBarTitleText}>
          {title}
        </Text>
      </View>
      {
        shouldHaveCloseIcon &&
        <TouchableHighlight
          activeOpacity={1}
          underlayColor='transparent'
          style={styles.topBarRightCloseButton}
          /* @ts-ignore */
          onPress={() => navigation.goBack()}
        >
          <View>
            <View style={styles.closeElementFirst} ></View>
            <View style={styles.closeElementSecond} ></View>
          </View>
        </TouchableHighlight>}
    </View>
  )
}

export default HeaderBar
