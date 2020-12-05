import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DigitalClock({ targetValue = "Jan 5, 2021 15:37:25" }) {
    const [currentTime, setCurrentTime] = useState(null);
    const countDownDate = new Date(targetValue).getTime()

    const getCurrentTime = () => {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        setCurrentTime(`${days ? days + "d " : ""}${hours ? hours + "h " : ""}${minutes}m ${seconds}s`)

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            setCurrentTime("EXPIRED")
        }
    };

    useEffect(() => {
        const intervalo = setInterval(() => {
            getCurrentTime();
        }, 1000); //Substitui componentDidAmount
        return () => clearInterval(intervalo); //Substitui componentWillUnmount
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.timeText}>{currentTime}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //paddingTop: Platform.OS === 'ios' ? 20 : 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    timeText: {
        fontSize: 30,
        color: '#000000',
    },
});
