import * as React from 'react';
import BottomTabs from './src/navigation/bottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/Stack';


export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
      <StackNavigator/>
    </NavigationContainer>

  );

};
