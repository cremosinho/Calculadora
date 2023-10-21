import React, {userState} from "react";
import { StyleSheet, Dimensions , TouchableHighlight, Text} from "react-native";

const estilo = StyleSheet.create({
    stButton:{
        fontSize:40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#f4f4f4',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
      },
    
    opButton:{
        color:'#fff',
        backgroundColor:'#fa8231'
    },

    buttonDouble:{
        width:(Dimensions.get('window').width/4) * 2
    },

    buttonTriple:{
        width:(Dimensions.get('window').width/4) * 3
    }

})

export default props =>{
    const estilosBtn = [estilo.stButton]
    if(props.double) estilosBtn.push(estilo.buttonDouble)
    if(props.triple) estilosBtn.push(estilo.buttonTriple)
    if(props.op) estilosBtn.push(estilo.opButton)
    return (
        <TouchableHighlight>
          <Text style={estilosBtn} onPress={() => props.onclick(props.label)}>{props.label}</Text>
        </TouchableHighlight>
    )
}