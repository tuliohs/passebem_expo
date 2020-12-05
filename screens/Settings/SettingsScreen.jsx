import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import HeaderLogo from '../../components/Header/HeaderLogo'
import { THEME } from '../../theme/colors'
import { Switch } from 'react-native-paper';
import { settingsItems } from './Items'

const MyComponent = ({ defaultState }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(defaultState);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

const SettingsScreen = ({ navigation }) => {

    const renderIt = ({ item }) => (
        <View style={{
            //justifyContent: "center",
            flexDirection: "row",
            borderColor: THEME.SECONDARY,
            borderBottomWidth: 1,
            width: "99%",
            margin: 10,
            paddingBottom: 20
        }}>
            <MyComponent defaultState={item.default} />
            <View><Text style={{
                marginLeft: 10,
                fontSize: 30
            }}>{item.config}</Text></View>
        </View>

    )
    return (
        <View style={styles.container}>
            <HeaderLogo title="Configurações" drawerPress={() => navigation.openDrawer()}
                onPress={() => navigation.navigate("Home")} />
            <FlatList
                data={settingsItems}
                renderItem={renderIt}
                keyExtractor={it => it.id}
                style={{
                    width: "100%"
                }}
            />
        </View>
    )
}
export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: Constants.statusBarHeight,
        //backgroundColor: THEME.PRIMARY,
        alignItems: 'center',
        //justifyContent: 'center',
    },
});
