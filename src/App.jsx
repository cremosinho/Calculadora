import React, {useState, Component} from 'react'
import {View, SafeAreaView, Text, StyleSheet} from 'react-native'
import Button from './components/Button'
import Display from './components/Display'

class App extends Component{
  state = {
    displayValue: '0'
  }

  addDigit = n =>{
    this.setState({displayValue: n})
  }

  clearMemory = () =>{
    this.setState({displayValue: '0'})
  }

  setOperation = op =>{
    this.setState({displayValue: op})
  }

  result = () =>{
    aux = eval(displayValue)
    this.setState({displayValue: aux})
  }

  render = () => (
    <SafeAreaView>
      <View style={this.estilo.stBar}>
        <Text style={this.estilo.barText}>Calculadora</Text>
      </View>
      <View style={this.estilo.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={this.estilo.buttons}>
          <Button label="AC" triple onclick={this.clearMemory}/>
          <Button label="/" op onclick={this.setOperation}/>
          <Button label="7" onclick={ this.addDigit}/>
          <Button label="8" onclick={ this.addDigit}/>
          <Button label="9" onclick={ this.addDigit}/>
          <Button label="*" op onclick={this.setOperation}/>
          <Button label="4" onclick={ this.addDigit}/>
          <Button label="5" onclick={ this.addDigit}/>
          <Button label="6" onclick={ this.addDigit}/>
          <Button label="+" op onclick={this.setOperation}/>
          <Button label="1" onclick={ this.addDigit}/>
          <Button label="2" onclick={ this.addDigit}/>
          <Button label="3" onclick={ this.addDigit}/>
          <Button label="-" op onclick={this.setOperation}/>
          <Button label="0" onclick={ this.addDigit}/>
          <Button label="=" triple/>
        </View>
      </View>
    </SafeAreaView>
  )

  estilo = StyleSheet.create({
    stBar:{
      height: 60,
      width: '100%',
      backgroundColor: '#a6e7ff',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

    barText:{
      color: '#000',
      fontWeight: 'bold',
      fontSize: 20
    },

    container:{
    },

    buttons:{
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
    
  })
}

export default App