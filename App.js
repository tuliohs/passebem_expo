import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import Navigator from './stacks/Navigator'


export default function App() {
  return (
    <>
      <Navigator />
      <StatusBar style="light" />
    </>
  );
}

