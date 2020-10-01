import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';

const Stack = createStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}
  >
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default RootNavigator;
