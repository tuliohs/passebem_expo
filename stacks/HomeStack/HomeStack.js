import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StepScreen from '../../screens/Step/StepScreen'
import FormData from '../../screens/Step/FormData'
import SignInScreen from '../../screens/User/SignIn/SignInScreen'
import ScheduleScreen from '../../screens/Schedule/ScheduleScreen'
import HomeScreen from '../../screens/Home/HomeScreen'
import DegrauScreen from '../../screens/Step/Degrau/DegrauScreen'

//cria a stack que permite o empilhamento de telas 
const Stack = createStackNavigator();

const HomeStack = () => {
    return <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Step" component={StepScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Schedule"
            component={ScheduleScreen}
            initialParams={{ id: 1 }}
        />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Degrau" component={DegrauScreen} />
    </Stack.Navigator>
}
export default HomeStack;