import React, { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './components/Home';
import Cocktails from './components/Cocktails';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="HOME" component={Home} options={{ title: '', headerTransparent: true, headerTintColor: '#fff', animation: 'ios' }}/>
        <Stack.Screen name="COCKTAILS" component={Cocktails} options={{ title: '', headerTransparent: true, headerTintColor: '#fff', animation: 'ios' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const config = {
  animation: 'spring',
  config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
  },
};

export default App;
