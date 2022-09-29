import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
    
  function calcular() {
    setImc(peso / (altura * altura))

    return imc;

  }

  function classificação() {

    if (imc > 1 && imc <= 18.5) {
      return ("Você está abaixo do peso");
    }

    else if (imc > 18.5 && imc <= 24.9) {
      return ("Você está no peso adequado as indicações da OMS");
    }

    else if (imc > 24.9 && imc <= 29.9) {
      return ("Você está com sobrepeso")
    }

    else if (imc > 29.9 && imc <= 34.9) {
      return ("Você está com obesidade de 1º")
    }

    else if (imc > 34.9 && imc <= 39.9) {
      return ("Você está com obesidade de 2º")
    }

    else if (imc > 39.9){ 
      return("Você está com obesidade de 3º")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>

      <TextInput style={styles.input}
        placeholder="Informe seu peso..."
        onChangeText={peso => { setPeso(peso) }}>
      </TextInput>

      <TextInput style={styles.input}
        placeholder="Informe sua altura..."
        onChangeText={altura => { setAltura(altura) }}></TextInput>

      <TouchableOpacity style={styles.button}
        onPress={calcular}>Calcular</TouchableOpacity>

      <View>

        <Text>Seu imc é de: </Text>
        <Text style={styles.result}>{imc.toFixed(2)}</Text>

        <Text>{classificação()}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    backgroundColor: 'lightgray',
    textAlign: 'center'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 'large'
  },

  input: {
    width: '350px',
    height: '35px',
    border: 'solid 2px black',
    borderRadius: '25px',
    textAlign: 'center',
    backgroundColor: 'white'
  },

  button: {
    fontWeight: 'bold',
    border: 'solid 2px black',
    padding: '5px',
    borderRadius: '25px',
    width: '100px',
    textAlign: 'center',
    backgroundColor: 'gray'
  },

  result: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  }

});
