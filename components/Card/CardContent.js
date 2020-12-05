import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Regressive from '../Time/Regressive';

const CardContet = ({ title, content, handleButton }) => {


    return <View style={styles.container} elevation={5} >
        <View style={styles.content} elevation={65}>
            <Text style={styles.txTitle}>{title}</Text>
            <Text style={styles.Paragr}>{content}</Text>
        </View>
        <View style={styles.bottonContent}>
            <Text style={styles.txtBottom}>Next Revision</Text>
            <Regressive />
            <TouchableOpacity style={styles.button} onPress={handleButton}>
                <Text style={{
                    color: "#Ffffff",
                    fontSize: 20,
                    backgroundColor: corAzul,
                    padding: 15,
                    flexGrow: 1,
                    borderRadius: 40,
                }}>Checked</Text>
            </TouchableOpacity>
        </View>
    </View >

}

export default CardContet;
const corAzul = "#2A265F";

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        padding: 10,
        width: "100%",
        marginBottom: 20
    },
    content: {
        backgroundColor: corAzul,
        padding: 30,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    txTitle: {
        color: "#ffffff",
        fontSize: 30
    },
    Paragr: {
        color: "gray",
        fontSize: 20
    },
    bottonContent: {
        padding: 30,
        //borderBottomEndRadius: 15,
        //borderBottomStartRadius: 15,
        borderColor: "gray",
        borderWidth: 0.5,
    },
    txtBottom: {
        color: "#000000",
        fontSize: 30
    },
    button: {
        alignItems: "flex-end",
        marginTop: 30

    }
})