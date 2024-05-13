import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Login from './pages/Login';

import { Entypo } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function Routes(){

    return (

        <Tab.Navigator>

          <Tab.Screen name="Início" component={Home} options={{ tabBarIcon: ({ size,color }) => (<Entypo name='Início' size={size} color={color} /> )}}/>
  
          <Tab.Screen name="Login" component={Login} options={{ tabBarIcon: ({ size,color }) => (<Entypo name='Login' size={size} color={color} /> )}}/>

        </Tab.Navigator>

    );
  }