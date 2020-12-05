import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Text, Image } from 'react-native'
import HeaderLogo from '../../../components/Header/HeaderLogo'
import { Input, Block, Button } from 'galio-framework';
import { THEME } from '../../../theme/colors'
import ImageCard from '../../../components/Card/ImageCard'
//import CardItem from '../../../components/Card/CardItem'
import { Degraultems } from '../Items'
import Constants from 'expo-constants'
import DegrauCard from './DegrauCard'

const DegrauScreen = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <DegrauCard
            description={`- Passo ${item.step}`}
            imageComp={item.image}
            cardText={item.text}
        />
    );
    return (
        <View style={styles.container}>
            <HeaderLogo title="Passe Bem" drawerPress={() => navigation.openDrawer()}
                onPress={() => navigation.navigate("Home")}
            />

            <View style={{
                marginTop: 20,
                width: "90%",
            }}>
                <FlatList
                    data={Degraultems}
                    renderItem={renderItem}
                    keyExtractor={it => it.id} />
            </View>
        </View >
    )
}
export default DegrauScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: Constants.statusBarHeight + 12,
        backgroundColor: THEME.PRIMARY,
        alignItems: 'center',
        //justifyContent: 'center',

    }
});
