import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StepScreen from '../../screens/Step/StepScreen'
import FormData from '../../screens/Step/FormData'
import TesteGalio from '../../screens/TesteGalio'
import SignInScreen from '../../screens/User/SignIn/SignInScreen'
import SignUpScreen from '../../screens/User/SignUp/SignUpScreen'
import ScheduleScreen from '../../screens/Schedule/ScheduleScreen'
import HomeScreen from '../../screens/Home/HomeScreen'

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
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Data" component={FormData} />
        <Stack.Screen name="TesteGalio" component={TesteGalio} />
    </Stack.Navigator>
}
export default HomeStack;