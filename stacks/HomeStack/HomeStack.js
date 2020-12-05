import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '../../screens/User/SignIn/SignInScreen'
import HomeScreen from '../../screens/Home/HomeScreen'
import DegrauScreen from '../../screens/Step/Degrau/DegrauScreen'
import TutorialScreenn from '../../screens/Tutorial/TutorialScreen'

//cria a stack que permite o empilhamento de telas 
const Stack = createStackNavigator();

const HomeStack = () => {
    return <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tutorial" component={TutorialScreenn} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Degrau" component={DegrauScreen} />
    </Stack.Navigator>
}
export default HomeStack;