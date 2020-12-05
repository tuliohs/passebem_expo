import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { THEME } from '../../theme/colors'
//import logo from '../../assets/icon.png'
import { Feather } from '@expo/vector-icons';


const HeaderUp = ({ title, subTitle, onPress }) => {
    return (
        <View>
            <View style={styles.header1}>
                {/*<Image source={logo} style={{ width: "40%" }} />*/}
                <Text style={styles.titulo}>{title}</Text>
            </View>
            {/*<View style={styles.header2}>
                <Text style={styles.titulo2}>{subTitle}</Text>
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Feather name="edit" size={24} color="white" />
                </TouchableOpacity>
            </View>*/}
        </View>
    );
}
export default HeaderUp

const styles = StyleSheet.create({
    header1: {
        //flex: 1,
        width: "100%",
        backgroundColor: THEME.PRIMARY,// '#368c8c',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'white',
        //borderBottomWidth: 1
    },
    /* header2: {
         backgroundColor: '#191a1e',
         display: 'flex',
         flexDirection: 'row',
         flexBasis: 56,
         padding: 15,
         borderBottomColor: 'white',
         borderBottomWidth: 1
     },*/
    titulo: {
        //fontFamily: 'Roboto',
        marginTop: Constants.statusBarHeight,
        fontSize: 25,
        color: 'white',
        flexGrow: 1,
        //backgroundColor: THEME.PRIMARY, // '#368c8c',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 4,
        borderRadius: 30 //'30%'
    },
    /*titulo2: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: 'white',
        flexGrow: 1,
        textAlign: 'center',
        fontWeight: 'bold',
    },*/
});