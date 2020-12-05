import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';

export default ({ icon, placeholder, value, change, password }) => {

    return (
        <View style={styles.InputArea}>
            <Image source={icon} />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={c => change(c)}
                secureTextEntry={password}
                style={styles.Input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    InputArea: {
        width: "100%",
        height: 60,
        backgroundColor: "#FFF",
        flexDirection: "row",
        borderRadius: 30,
        paddingLeft: 15,
        alignItems: "center",
        marginBottom: 15
    },
    Input: {
        flex: 1,
        fontSize: 16,
        color: "#268596",
        marginLeft: 10
    }
});
