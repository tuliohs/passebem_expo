
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { THEME } from '../../theme/colors'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CardItem = ({ description, priority, handleRemove, handleEdit, handleSchedule }) => {
    return (
        <View style={styles.card}>
            <View style={styles.infoCard}>
                <Text style={styles.tituloCard}>{description}</Text>
                <Text style={styles.detalhesCard}>
                    {priority}  <Text style={styles.destaqueCard}></Text>
                </Text>
            </View>
            <TouchableOpacity onPress={handleSchedule}>
                <AntDesign style={[styles.iconCard, { padding: 6 }]} name="clockcircleo" size={40} color="black" />
            </TouchableOpacity>
            <View style={styles.groupIcons}>
                <TouchableOpacity onPress={handleEdit}>
                    <MaterialIcons style={styles.iconCard} name="edit" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRemove}>
                    <FontAwesome style={[styles.iconCard, { marginTop: 10 }]} name="remove" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default CardItem

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: THEME.PRIMARY, // '#043d5d',
        padding: 15,
        borderLeftWidth: 8,
        borderRadius: 4,
        marginTop: 10,
    },
    groupIcons: {
        justifyContent: "space-between"
    },
    iconCard: {
        //flexBasis: 56,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    infoCard: {
        //flexGrow: 1,
        flexDirection: 'column',
        width: "75%",
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
    destaqueCard: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
});