
import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import StepScreen from '../../screens/Step/StepScreen'
import TutorialScreenn from '../../screens/Tutorial/TutorialScreen'
import ScheduleScreen from '../../screens/Schedule/ScheduleScreen'

const Drawer = createDrawerNavigator()

export default function RightDrawer() {

    return <Drawer.Navigator drawerPosition="right">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Totorial" component={TutorialScreenn} />
        <Drawer.Screen name="Schedule" component={ScheduleScreen} />
        <Drawer.Screen name="Step" component={StepScreen} />
    </Drawer.Navigator>
}