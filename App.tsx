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
import Home from './screens/Home';
import Cocktails from './screens/Cocktails';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%'
          }} />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="HOME" component={Home} options={{ headerTransparent: true }}/>
        <Stack.Screen name="COCKTAILS" component={Cocktails} options={{ headerTransparent: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
