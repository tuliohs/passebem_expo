import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import HeaderUp from '../../components/Header/HeaderUp'
import HeaderLogo from '../../components/Header/HeaderLogo'
import { Input, Block, Button } from 'galio-framework';
import { THEME } from '../../theme/colors'
import ImageCard from '../../components/Card/ImageCard'
import CardItem from '../../components/Card/CardItem'
import { Tutorialtems } from './Items'
import Constants from 'expo-constants'

const TutorialScreen = ({ navigation }) => {
    const item = {
        title: 'Ice cream is made with carrageenan …',
        image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        cta: 'View article',
        horizontal: true
    }

    const renderItem = ({ item }) => (
        <ImageCard title={item.title} subTitle={item.subTitle} image={item.image}
            handleTutorial={() => navigation.navigate("Degrau")}
        />
    );
    return (
        <View style={styles.container}>
            <HeaderLogo title="Passe Bem" drawerPress={() => navigation.openDrawer()} />

            <View style={{
                marginTop: 20,
                width: "75%"
            }}>
                <FlatList
                    data={Tutorialtems}
                    renderItem={renderItem}
                    keyExtractor={it => it.id} />
            </View>
        </View >
    )
}
export default TutorialScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight + 12,
        backgroundColor: THEME.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',

    },
    addItem: {
        backgroundColor: '#368c8c',
        width: "100%",
        padding: 5
    }
});
