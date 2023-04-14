import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenStack } from './src/navigation/ScreenStack';


export default function App() {
  return (
    <NavigationContainer>
      <ScreenStack/>
    </NavigationContainer>
  );

};
