import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Dashboard from '../pages/Dashboard';
import Tarefas from '../pages/Tarefas';

const App = createBottomTabNavigator();

const AppRoutes = () => (
  <App.Navigator
    initialRouteName="Tarefas"
  >
    <App.Screen
      name="Tarefas"
      component={Tarefas}
      options={{
        tabBarIcon: () => (
          <Ionicons name="ios-list-box" size={32} color="black" />
        ),
      }}
    />

    <App.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarIcon: () => (
          <Ionicons name="ios-podium" size={32} color="black" />
        ),
      }}
    />
  </App.Navigator>
);

export default AppRoutes;
