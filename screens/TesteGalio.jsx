import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import HeaderUp from '../components/Header/HeaderUp'
import { Input, Block } from 'galio-framework';
import Card from '../components/Argon/Card'
''
const TesteGalio = () => {
    const item = {
        title: 'Ice cream is made with carrageenan …',
        image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        cta: 'View article',
        horizontal: true
    }

    return (
        <View style={styles.container}>
            <HeaderUp title="Schedule" />
            <View style={styles.addItem}>
                <Input
                    placeholder="Input with Icon on right"
                    right
                    family="antdesign"
                    iconSize={14}
                    iconColor="red"
                    onChangeText={() => console.log('aasfd')}
                />
            </View>
            <Card item={item} />
        </View>
    )
}
export default TesteGalio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addItem: {
        backgroundColor: '#368c8c',
        width: "100%",
        padding: 5
    }
});
