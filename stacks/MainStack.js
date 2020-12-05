
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import SignUpScreen from '../screens/User/SignUp/SignUpScreen'
import SignInScreen from '../screens/User/SignIn/SignInScreen'
import HomeScreen from '../screens/Home/HomeScreen'
import LeftDrawer from './HomeStack/LeftDrawer'

const Stack = createStackNavigator();
export default function TabNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Home" component={LeftDrawer} />
        </Stack.Navigator>
    );
}