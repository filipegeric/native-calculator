import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CalculatorKey from './CalculatorKey'

export default class Keyboard extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'black', padding: 5, alignSelf: 'stretch'}}>
        <View style={{flexDirection: 'row'}}>
          <CalculatorKey value="AC" width={51} backgroundColor="#ac3939" handleButtonClick={this.props.handleButtonClick}/>
          <CalculatorKey value="/" width={25} backgroundColor="#666666" handleButtonClick={this.props.handleButtonClick}/>
          <CalculatorKey value="x" width={25} backgroundColor="#666666" handleButtonClick={this.props.handleButtonClick}/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CalculatorKey value="7" width={25} handleButtonClick={this.props.handleButtonClick}/>
          <CalculatorKey value="8" width={25} handleButtonClick={this.props.handleButtonClick} />
          <CalculatorKey value="9" width={25} handleButtonClick={this.props.handleButtonClick} />
          <CalculatorKey value="-" width={25} backgroundColor="#666666" handleButtonClick={this.props.handleButtonClick}/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CalculatorKey value="4" width={25} handleButtonClick={this.props.handleButtonClick} />
          <CalculatorKey value="5" width={25} handleButtonClick={this.props.handleButtonClick} />
          <CalculatorKey value="6" width={25} handleButtonClick={this.props.handleButtonClick} />
          <CalculatorKey value="+" width={25} backgroundColor="#666666" handleButtonClick={this.props.handleButtonClick}/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 75}}>
            <View style={{flexDirection: 'row'}}>
              <CalculatorKey value="1" width={1/3} handleButtonClick={this.props.handleButtonClick}/>
              <CalculatorKey value="2" width={1/3} handleButtonClick={this.props.handleButtonClick}/>
              <CalculatorKey value="3" width={1/3} handleButtonClick={this.props.handleButtonClick}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <CalculatorKey value="0" width={2/3} handleButtonClick={this.props.handleButtonClick}/>
              <CalculatorKey value="." width={1/3} handleButtonClick={this.props.handleButtonClick}/>
            </View>
          </View>
          <View style={{flex: 25, flexDirection: 'column'}}>
            <CalculatorKey value="=" backgroundColor="#004466" handleButtonClick={this.props.handleButtonClick}/>
          </View>
        </View>
      </View>
    )
  }
}