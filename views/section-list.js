import React, { Component } from 'react';
import { SectionList, View, Dimensions, Text, Button } from 'react-native';
import { OpenSidebar } from './openSidebar'
import { data } from './section-list-data'
export default class ListScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Section List'
  }
  constructor(props) {
    super(props);
    const titles = 'abcdefghijklmnopqrstuvwxyz'.split('').map(title => ({ title, data: [] }))
    const sections = data.reduce((acc, item) => {
      return acc.map(section => {
        if (item.lastName.toLowerCase().startsWith(section.title)) {
          section.data.push(item)
        }
        return section
      })
    }, titles).filter(section => section.data.length)
    this.state = {
      sections
    };
  }
  render() {
    return (<View>
      <View style={{ marginTop: 15}}>
        <OpenSidebar navigation={this.props.navigation} />
      </View>
      <SectionList
      keyExtractor={(item) => item.id}
      sections={this.state.sections}
      renderSectionHeader={(data) => {
        const { section } = data
      return (<View style={{
        height: 30,
        borderTopWidth: 1,
        borderColor: 'rgba(33,150,243,.3)',
         justifyContent: 'center', backgroundColor: '#2196f3' }}>
        <Text color={'white'} style={{ paddingLeft: 10, color: 'white'}}>{section.title.toUpperCase()}</Text>
        </View>)}}
      renderItem={(data) => {
        const { item } = data
        return (<View style={{height: 40, justifyContent: 'center', borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.1)' }}>
          <Text style={{ paddingLeft: 10 }}>{item.firstName + ' ' + item.lastName}</Text>
          </View>)
      }}>

    </SectionList></View>)
  }
}