import { View, Text, Image } from 'react-native'
import React from 'react'
import { deviceHeight } from './src/Dimensions'
import Login from './src/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLogin from './src/UserLogin';
import MonitorLogin from './src/MonitorLogin';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator screenOptions={{headerShown:false}}>
  <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="MonitorLogin" component={MonitorLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}