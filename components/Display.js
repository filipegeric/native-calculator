import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Display extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center', backgroundColor: 'black', padding: 5, alignSelf: 'stretch', flexGrow: 1}}>
        <Text style={{fontFamily: 'monospace', color: 'orange', fontSize: 20, minHeight: 20, textAlign: 'right', marginBottom: 15}}>{this.props.upperDisplayValue}</Text>
        <Text style={{fontFamily: 'monospace', color: 'white', fontSize: 29, minHeight: 29, textAlign: 'right'}}>{this.props.lowerDisplayValue}</Text>
      </View>
    )
  }
}

export default Display

