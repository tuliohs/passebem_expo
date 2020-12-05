import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import HeaderUp from '../../components/Header/HeaderUp'
import HeaderLogo from '../../components/Header/HeaderLogo'
import { Input, Block, Button } from 'galio-framework';
import { THEME } from '../../theme/colors'

const HomeScreen = ({ navigation }) => {
    const item = {
        title: 'Ice cream is made with carrageenan …',
        image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        cta: 'View article',
        horizontal: true
    }

    return (
        <View style={styles.container}>
            <HeaderLogo title="Passe Bem" drawerPress={() => navigation.openDrawer()} />

        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: Constants.statusBarHeight,
        backgroundColor: THEME.PRIMARY,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    addItem: {
        backgroundColor: '#368c8c',
        width: "100%",
        padding: 5
    }
});
