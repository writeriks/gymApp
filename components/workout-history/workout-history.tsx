import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { Text } from 'react-native';

const WorkoutHistory: React.FC = () => {
  const isFocused = useIsFocused()
  useEffect(() => {
    console.log("🚀 ~ file: workout-history.tsx ~ line 7 ~ isFocused", isFocused)
  }, [isFocused])
  return (
    <Text>
      WORKOUTS
    </Text>
  );
};

export default WorkoutHistory;
