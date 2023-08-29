import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroScreen from '../screens/Intro';
import SignUpScreen from '../screens/SignUp';
import LoginScreen from '../screens/Login';
import NameScreen from '../screens/Name';
import DueScreen from '../screens/Due';
import WorkoutScreen from '../screens/Workout';
import NotificationsScreen from '../screens/Notifications';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const screenOptions = {
    headerShown: false,
    // gestureEnabled: false,
    headerLeft: () => null,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Name" component={NameScreen} />
        <Stack.Screen name="Due" component={DueScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
