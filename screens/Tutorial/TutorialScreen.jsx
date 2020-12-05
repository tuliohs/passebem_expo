import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import HeaderUp from '../../components/Header/HeaderUp'
import HeaderLogo from '../../components/Header/HeaderLogo'
import { Input, Block, Button } from 'galio-framework';
import { THEME } from '../../theme/colors'
import ImageCard from '../../components/Card/ImageCard'

const items = [
    { id: 1, title: "Camisa", sub: "Social" },
    { id: 2, title: "Camisa", sub: "Polo" },
    { id: 3, title: "Camisa", sub: "Curta" },
    { id: 4, title: "Camisa", sub: "Malha" },
    { id: 5, title: "Camisa", sub: "Lisa" },
]

const TutorialScreen = ({ navigation }) => {
    const item = {
        title: 'Ice cream is made with carrageenan …',
        image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        cta: 'View article',
        horizontal: true
    }

    const renderCard = ({ c }) => (

        <ImageCard subTitle={"c.sub"} title={c.title} />
    )
    return (
        <View style={styles.container}>
            <HeaderLogo title="Passe Bem" drawerPress={() => navigation.openDrawer()} />
            {/*<View style={{ flex: 1 }}>*/}
            <ImageCard subTitle={"c.sub"} title={"c.title"} />
            {<FlatList
                data={items}
                renderItem={renderCard} />}
            {/*</View>*/}
        </View>
    )
}
export default TutorialScreen

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //marginTop: Constants.statusBarHeight,
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
