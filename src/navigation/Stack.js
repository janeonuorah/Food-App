import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import FoodMenu from '../screens/FoodMenu';
import Search from '../screens/Search';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <StackNavigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Menu' component={FoodMenu} />
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name='Profile' component={Profile} />
        </StackNavigator>
    );
}

export { StackNavigator }
