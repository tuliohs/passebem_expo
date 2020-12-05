import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { THEME } from '../../theme/colors'

export default function HorizontalTimeLine({ date = "Jan", handleCurrent }) {
    const month = new Date(date).getTime()
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={handleCurrent}>
                <Text style={styles.label}>{date}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle} onPress={handleCurrent}></TouchableOpacity>
            <View style={styles.line}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginBottom: 20,
        width: 100,
        marginLeft: 0
    },
    label: {
        color: "grey",
        fontSize: 25,
        paddingBottom: 15,
        backgroundColor: "#F5F5F5",
        padding: 3,
        marginBottom: 15
    },
    circle: {
        marginTop: 1,
        padding: 5,
        width: 10,
        height: 10,
        borderColor: THEME.PRIMARY,
        borderWidth: 3,
        position: "absolute",
        borderRadius: 100,
        backgroundColor: THEME.PRIMARY,
        marginTop: 60
    },
    line: {
        backgroundColor: THEME.PRIMARY,
        padding: 1.5,
        width: "100%"
    }

});
