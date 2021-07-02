import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';
import { Horoscopo } from '../pages/Horoscopo';
import { UserIdentification } from '../pages/UserIdentification';


const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: '#FFF'
      }
    }}
  >
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />

    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />

    <stackRoutes.Screen
      name="Home"
      component={Home}
    />

    <stackRoutes.Screen
      name="Horoscopo"
      component={Horoscopo}
    />

  </stackRoutes.Navigator>
)

export default AppRoutes;