import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import HeaderLogo from '../../components/Header/HeaderLogo'
import { THEME } from '../../theme/colors'
import { menultems } from './Items'

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
            <Image source={item.image}
                style={{
                    width: 150,
                    height: 150,
                    margin: 18
                }}
            />
        </TouchableOpacity >
    );
    return (
        <View style={styles.container}>
            <HeaderLogo title="Passe Bem" drawerPress={() => navigation.openDrawer()} />
            <FlatList
                contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}
                data={menultems}
                renderItem={renderItem}
                keyExtractor={it => it.id}
            />
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
});
