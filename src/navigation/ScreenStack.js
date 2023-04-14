import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FoodDetails from '../screens/Details';
import BottomTabs from './bottomTabs';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home Screen' component={BottomTabs} />
            <Stack.Screen name='Food Details' component={FoodDetails} />
        </Stack.Navigator>
    );
}

export { ScreenStack }
