import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {

  const [km, setKm] = useState(0);
  const [milhas, setMilhas] = useState(0);

  function converter() {
    setMilhas(parseFloat((km / 1.609)))

    return milhas;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Km/h para Milhas/h</Text>
      <TextInput

        style={styles.input}
        placeholder="Digite a velocidade a ser convertida..."
        onChangeText={km => { setKm(km) }} >

      </TextInput>

      <TouchableOpacity onPress={converter}>
        <Text style={styles.button}>Calcular</Text>
      </TouchableOpacity>


      <View>
        <Text style={styles.result}>{milhas.toFixed(2)}</Text>
        <Text>Milhas/h</Text>
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
