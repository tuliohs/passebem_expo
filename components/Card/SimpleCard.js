import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { THEME } from './../../theme/colors'

export default function SimpleCard({ title, subTitle, action }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Produto')}>
            <Card.Title
                title={title}
                subtitle={subTitle}
                left={(props) => <Avatar.Icon {...props} icon="folder" style={{ backgroundColor: THEME.DARK_PRIMARY }} />}
                right={(props) => <IconButton {...props} icon="equal" onPress={() => navigation.navigate('Produto')} />}
            />
        </TouchableOpacity>
    );
}