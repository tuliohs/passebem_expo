import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const Modal = ({ show, close, mensagem }) => {
    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)
    })

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100 }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
        ]).start()
    }

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
            Animated.timing(state.container, { toValue: height, duration: 100 })
        ]).start()
    }

    useEffect(() => {
        console.log(show)
        if (show) {
            openModal()
        } else {
            closeModal()
        }
    }, [show])

    return (
        <Animated.View
            style={[styles.container, {
                opacity: state.opacity,
                transform: [
                    { translateY: state.container }
                ]
            }]}
        >
            <Animated.View
                style={[styles.modal, {
                    transform: [
                        { translateY: state.modal }
                    ]
                }]}
            >
                <View style={styles.indicator} />

                <Text style={styles.text}>
                    {mensagem}
                </Text>

                <TouchableOpacity style={styles.btn} onPress={close}>
                    <Text style={{ color: '#fff' }}>Acessar App</Text>
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        marginLeft: '20%',
        marginTop: '30%',
    },
    modal: {
        //bottom: 0,
        //position: 'absolute',
        height: '100%',
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 25,
        paddingRight: 25
    },
    indicator: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 5,
    },
    text: {
        marginTop: 50,
        textAlign: 'center'
    },
    btn: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#9b59b6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default Modal