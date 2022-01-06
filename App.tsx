import { StyleSheet, View } from 'react-native';

import GymAppMain from './components/gym-app-main';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    }
  });

  return (
    <View style={styles.container}>
      <GymAppMain />
    </View>
  );
}



