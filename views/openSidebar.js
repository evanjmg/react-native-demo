import React, { Component } from 'react';
import { Button } from 'react-native'
export const OpenSidebar = ({ navigation }) => {
  return (<Button onPress={() =>  navigation.navigate('DrawerOpen')} title={'Open Sidebar'}></Button>)
}