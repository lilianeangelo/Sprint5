import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../assets/imagem.jpg')}
          style={styles.image} 
        />
        <Text style={styles.heading}>Bem-vindo ao TourGuide</Text>
        <Text style={styles.subheading}>Descubra como viajar de forma sustentável e responsável</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Integracao1')}
        >
          <Text style={styles.buttonText}>Começar Jornada</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.orText}
          onPress={() => navigation.navigate('EscolherPreferencias1')}
        >
          <Text style={styles.skipText}>Pular apresentação</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200, 
    resizeMode: 'contain', 
    marginBottom: 20, 
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#53a65b',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    alignSelf: 'center',
    marginTop: 10,
  },
  skipText: {
    color: '#53a65b',
    fontSize: 16,
    fontWeight: '600',
  },
});