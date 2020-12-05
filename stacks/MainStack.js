
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import SignUpScreen from '../screens/User/SignUp/SignUpScreen'
import SignInScreen from '../screens/User/SignIn/SignInScreen'
import RightDrawer from './HomeStack/RightDrawer'

const Stack = createStackNavigator();
export default function TabNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Home" component={RightDrawer} />
        </Stack.Navigator>
    );
}