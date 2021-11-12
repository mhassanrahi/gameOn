import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LogoSvg from './src/assets/images/gaming.svg';

const App = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#20315f',
          fontFamily: 'Inter-Bold',
        }}>
        GAMEON
      </Text>
      <LogoSvg size={33} />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#AD40AF',
          width: '90%',
          padding: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 18,
            fontFamily: 'Roboto-MediumItalic',
          }}>
          Let's begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;
