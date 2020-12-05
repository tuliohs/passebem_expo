
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { THEME } from '../../../theme/colors'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const DegrauCard = ({ description, priority, imageComp, cardText, handleRemove, handleEdit, handleSchedule }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.infoCard}>
                    <Text style={styles.tituloCard}>{description}</Text>
                </View>
                <View style={styles.groupIcons}>
                    <TouchableOpacity onPress={handleEdit}>
                        <MaterialIcons style={styles.iconCard} name="edit" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={imageComp}
                style={{
                    marginBottom: 14
                }}
            />
            <Text style={styles.detalhesCard}>
                {cardText}
            </Text>
        </View>
    );
}
export default DegrauCard

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginBottom: 18,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: THEME.DARK_SUCCESS, // '#043d5d',
        padding: 15,
        borderLeftWidth: 8,
        borderRadius: 4,
    },
    card: {
        flexDirection: 'row',
        marginTop: 10,
    },
    groupIcons: {
        justifyContent: "space-between"
    },
    iconCard: {
        //flexBasis: 56,
        //marginRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    infoCard: {
        //flexGrow: 1,
        flexDirection: 'column',
        width: "90%",
    },
    tituloCard: {
        flexShrink: 1,
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 20,
        color: '#999999',
    },
    detalhesCard: {
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#999999',
        lineHeight: 26,
    },

});