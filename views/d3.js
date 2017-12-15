/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { OpenSidebar } from './openSidebar'
import { Alert, View } from 'react-native'
const Theme = {
  colors: [
    "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
    "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"
  ]

}
const data = {

  spendingsPerYear: [
    {year: 2016, value: 3.24},
    {year: 2015, value: 3.24},
    {year: 2014, value: 10.35},
    {year: 2013, value: 10.84},
    {year: 2012, value: 9.92},
    {year: 2011, value: 65.80},
    {year: 2010, value: 19.47},
    {year: 2009, value: 30.24},
    {year: 2008, value: 10.35},
    {year: 2007, value: 10.84},
    {year: 2006, value: 19.92},
    {year: 2005, value: 80.80},
    {year: 2004, value: 19.47},
    {year: 2003, value: 34.24},
    {year: 2001, value: 65.35},
    {year: 2000, value: 45.84},
    {year: 1999, value: 60.92},
    {year: 1998, value: 21.80},
    {year: 1997, value: 19.47},
    {year: 1996, value: 3.24},
    {year: 1995, value: 10.35},
    {year: 1994, value: 20.84},
    {year: 1993, value: 60.92},
    {year: 1992, value: 80.80},
  ],

  spendingsLastMonth: [
    {"number":  8, "name": 'Fun activities'},
    {"number": 7, "name": 'Dog'},
    {"number": 16, "name": 'Food'},
    {"number": 23, "name": 'Car'},
    {"number": 42, "name": 'Rent'},
    {"number":  4, "name": 'Misc'},
  ],
};
import { Pie } from './chart'
export class D3View extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
  return (<View style={ { marginTop: 20 }}>
    <OpenSidebar navigation={this.props.navigation}  />
    <Pie
            pieWidth={175}
            pieHeight={175}
            onItemSelected={() => Alert.alert(
  'Pie Question',
  'Do you like this piece of pie?',
  [
    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)}
            colors={Theme.colors}
            width={300}
            height={300}
            data={data.spendingsLastMonth} /></View>)
}
}