import React, {useState, Component} from 'react'
import {View, SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native'
import Button from './components/Button'
import Display from './components/Display'


const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
  result: false
}

class App extends Component{
  state = {...initialState}

  addDigit = n =>{
    if(n === '.' &&this.state.displayValue.includes('.')){
      return
    }

    const clearDisplay =this.state.displayValue === '0' ||this.state.clearDisplay
    const currentValue = clearDisplay?'':this.state.displayValue
    const displayValue = currentValue + n
   this.setState({ displayValue , clearDisplay : false})

    if(n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
     this.setState({values})
    }
  }

  clearMemory = () =>{
   this.setState({...initialState})
  }

  setOperation = op =>{
    if(this.state.current === 0){
      this.setState({operation: op, current: 1, clearDisplay: true})
    }else{
      const equals = op === '='
      const values = [...this.state.values]
      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }catch (e){
        values[0] = this.state.values[0]
      }
      values[1] = 0
      this.setState({
        displayValue: values[0],
        operation: equals ? null : op,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
        result: equals
      })
    }
  }

  render = () => (
    <>
      <StatusBar backgroundColor="#000000b3"></StatusBar>
      <SafeAreaView>
        <View style={this.estilo.stBar}>
          <Text style={this.estilo.barText}>Calculadora</Text>
        </View>
        <View style={this.estilo.container}>
          <Display value={this.state.displayValue} result={this.state.result}></Display>
          <View style={this.estilo.buttons}>
            <Button label="AC" triple onclick={this.clearMemory}/>
            <Button label="/" op onclick={this.setOperation}/>
            <Button label="7" onclick={this.addDigit}/>
            <Button label="8" onclick={this.addDigit}/>
            <Button label="9" onclick={this.addDigit}/>
            <Button label="*" op onclick={this.setOperation}/>
            <Button label="4" onclick={this.addDigit}/>
            <Button label="5" onclick={this.addDigit}/>
            <Button label="6" onclick={this.addDigit}/>
            <Button label="+" op onclick={this.setOperation}/>
            <Button label="1" onclick={this.addDigit}/>
            <Button label="2" onclick={this.addDigit}/>
            <Button label="3" onclick={this.addDigit}/>
            <Button label="-" op onclick={this.setOperation}/>
            <Button label="0" double onclick={this.addDigit}/>
            <Button label="." onclick={this.addDigit}/>
            <Button label="=" op onclick={this.setOperation}/>
          </View>
        </View>
      </SafeAreaView>
    </>
  )

  estilo = StyleSheet.create({
    stBar:{
      height: 60,
      width: '100%',
      backgroundColor: '#000000b3',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },

    barText:{
      color: '#fff',
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