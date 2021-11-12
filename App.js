import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315f'}}>
        GAMEON
      </Text>
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
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>
          Let's begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
