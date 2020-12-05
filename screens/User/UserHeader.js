import React from 'react'
import {
    View,
    Image
} from 'react-native'
import ImagemPBG from '../../assets/header.png'


export default function UserHeader() {
    return <View style={{ width: "70%", marginBottom: 38 }}>
        <Image source={ImagemPBG} style={{ width: "100%", height: 70 }} />
    </View>
}