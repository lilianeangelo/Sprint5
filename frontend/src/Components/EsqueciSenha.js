import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function EsqueciSenha({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.backButton, { marginTop: 20 }]} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="#53a65b" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.helpButton, { marginTop: 20 }]} onPress={() => navigation.navigate('CentralAjuda')}>
        <Icon name="question-circle" size={30} color="#53a65b" />
      </TouchableOpacity>

      <Image source={require('../assets/Image.png')} style={styles.headerImage} />

      <Text style={styles.title}>Esqueci minha senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CodigoVerificacao')}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  helpButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#53a65b',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});