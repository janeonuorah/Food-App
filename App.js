import * as React from 'react';
import BottomTabs from './src/navigation/bottomTabs';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
        <BottomTabs />
    </NavigationContainer>

  );

};
