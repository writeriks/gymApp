import { StyleSheet } from 'react-native'

export const headerBarStyle = StyleSheet.create({
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