import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {

  const [real, setValorReal] = useState(0);
  const [dolar, setValorDolar] = useState(0);
  const [resultado, setResultado] = useState(0);

  function converter() {

    setResultado(parseFloat(real / dolar))

    return resultado;
  }
  return (
    <View style={styles.container}>

    <Text style={styles.title}>Conversor de Real (R$) para Dolar ($)</Text>
        <TextInput style={styles.input}
        placeholder="Digite o valor do dolar..."
        onChangeText={valorDolar => { setValorDolar(valorDolar) }}
      ></TextInput>

      <TextInput style={styles.input}
        placeholder="Digite o valor a ser convertido..."
        onChangeText={valorReal => { setValorReal(valorReal) }}
      ></TextInput>

      <TouchableOpacity onPress={converter}>
        <Text style={styles.button}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{resultado.toFixed(2)} $</Text>

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

