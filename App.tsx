import React from 'react';
import {
  StyleSheet,
  ImageBackground,
} from 'react-native';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Cocktails from './components/Cocktails';
import GradientTemplate from './style/GradientTemplate';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <ImageBackground blurRadius={0.5} style={styles.mainImg} source={require('./assets/images/cocktailsBg2.jpg')}>
      <GradientTemplate headerPadding={true}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="HOME" component={Home} options={{ title: '', headerTransparent: true, headerTintColor: '#fff', animation: 'ios' }} />
          <Stack.Screen name="COCKTAILS" component={Cocktails} options={{ title: '', headerTransparent: true, headerTintColor: '#fff', animation: 'ios' }} />
        </Stack.Navigator>
      </NavigationContainer>
      </GradientTemplate>
    </ImageBackground>
  );
};

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const styles = StyleSheet.create({
  mainImg: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    resizeMode: 'contain',
    opacity: 1,
  }
});

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
