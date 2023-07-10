import React from 'react';
import BloodTypeExercise from './components/BloodTypeExercise';
import CardExpirationExercise from './components/CardExpirationExercise/CardExpirationExercise';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChristmasTreeExercise from './components/ChristmasTreeExercise/ChristmasTreeExercise';

export enum RootStackRouteNames {
  BloodTypeExerciseScreen = 'BloodTypeExerciseScreen',
  CardExpirationExerciseScreen = 'CardExpirationExerciseScreen',
  ChristmasTreeExerciseScreen = 'ChristmasTreeExerciseScreen',
}

export type RootStackParamList = {
  [RootStackRouteNames.BloodTypeExerciseScreen]: undefined;
  [RootStackRouteNames.CardExpirationExerciseScreen]: undefined;
  [RootStackRouteNames.ChristmasTreeExerciseScreen]: undefined;
};

function App(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RootStackRouteNames.BloodTypeExerciseScreen}
          component={BloodTypeExercise}
          options={{ title: 'Blood Type Exercise' }}
        />
        <Stack.Screen
          name={RootStackRouteNames.CardExpirationExerciseScreen}
          component={CardExpirationExercise}
          options={{ title: 'Card Expiration Exercise' }}
        />
        <Stack.Screen
          name={RootStackRouteNames.ChristmasTreeExerciseScreen}
          component={ChristmasTreeExercise}
          options={{ title: 'Christmas Tree Exercise' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
