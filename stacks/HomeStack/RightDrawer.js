
import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import TutorialScreenn from '../../screens/Tutorial/TutorialScreen'
import MessageScreen from '../../screens/Chat/MessageScreen'
import MainStack from '../MainStack'

const Drawer = createDrawerNavigator()

export default function RightDrawer() {

    return <Drawer.Navigator drawerPosition="right">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Tutorial" component={TutorialScreenn} />
        <Drawer.Screen name="Message" component={MessageScreen} />
        <Drawer.Screen name="LogOut" component={MainStack} />
    </Drawer.Navigator>
}