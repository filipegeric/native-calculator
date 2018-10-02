import React, { Component } from 'react'
import { Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default class CalculatorKey extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => this.props.handleButtonClick(this.props.value)} 
        style={{
          flex: this.props.width, 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: this.props.value === '=' ? 162 : 80, 
          backgroundColor: this.props.backgroundColor,
          margin: 1
        }}>
        <Text style={{color: 'white', fontSize: 20}}>{this.props.value}</Text>
      </TouchableOpacity>
    )
  }
}

CalculatorKey.defaultProps = {
  backgroundColor: '#4d4d4d'
};