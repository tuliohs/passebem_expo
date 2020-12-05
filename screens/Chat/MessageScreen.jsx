import React, { useState, useCallback, useEffect } from 'react'
import { View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { messageltems } from './Items';
import HeaderLogo from '../../components/Header/HeaderLogo'

export default function MessageScreen({ navigation }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(messageltems)
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <>
            <HeaderLogo title="Mensagens" drawerPress={() => navigation.openDrawer()}
                onPress={() => navigation.navigate("Home")} />
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </>

    )
}