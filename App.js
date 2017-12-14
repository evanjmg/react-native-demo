/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import * as zoom from 'd3-zoom'
import * as scale from 'd3-scale'

import {
  ART,
  Dimensions,
  StyleSheet,
  View,
  PanResponder
} from 'react-native'
const {
Group,
Shape,
Surface,
Path
} = ART
const width = 300
const height = 300
const PaddingSize = 20;
const dimensionWindow = Dimensions.get('window');
const graphHeight = height - PaddingSize * 2;
const graphWidth = width - PaddingSize * 2;
export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      rescaledX: 1,
      rescaledY: 1
    }
  }
  componentWillMount() {
    this._panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (event, { dx, dy }) => {
            // const zoomIdentity = zoom.zoomIdentity.translate(dx, dy)
            // this._onDrag(zoomIdentity)
        },
    });
  }
  _onDrag(zoomIdentity) {
    // this.setState({
    //     rescaledX: zoomIdentity.rescaleX(this.state.rescaledX),
    //     rescaledY: zoomIdentity.rescaleY(this.state.rescaledY)
    //   })
  }
  render() {
    return (
      <View {...this._panResponder.panHandlers} style={styles.container}>
        <Surface width={graphWidth} height={graphHeight}>
          <Group x={0} y={0}>
             <Shape d={ new Path().moveTo(0,0).lineTo(200 * this.state.rescaledX, 200 * this.state.rescaledY) } stroke="black" strokeWidth={10}/>
           </Group>
        </Surface>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
