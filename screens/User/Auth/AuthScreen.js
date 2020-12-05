import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header'
import Modal from '../../../components/Modal/Modal'

export default function AuthScreen() {
    const navigation = useNavigation();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const validation = (result) => {
        console.log(result)
        if (result === "ABCDE-12345-A2A4" || result === "EDASA-85987-A1A4" || result === "OSIXV-23497-A4A4" || result === "POQWE-32184-A3A4") {
            setShowModal(true)
        }
        else alert("Codigo Inválido")
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        validation(data)
    };
    const closeModal = () => {
        setShowModal(false)
        navigation.navigate('Home');
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <SafeAreaView style={styles.body} >
            <Header subTitle="Autenticação com QRCode" />
            <View style={{ flex: 1 }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={[styles.container]}>
                    <BarcodeMask />
                    {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
                </BarCodeScanner>
            </View>
            <Modal
                mensagem="Parabéns você fez a utilização da autenticação em dois fatores"
                show={showModal}
                close={closeModal}
            />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: "80%"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 2,
        height: 1,
        width: '80%',
    },
    body: {
        flex: 1,
        paddingTop: 0,
        padding: 20
    }
});