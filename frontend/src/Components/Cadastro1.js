import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, GoogleAuthProvider, signInWithCredential } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function Cadastro1({ navigation }) {
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(idToken);
      await getAuth().signInWithCredential(googleCredential);
      navigation.navigate('BuscaLocais'); // Substitua pelo nome da sua tela principal
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#53a65b" />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subtitle}>Comece a desfrutar de todos os nossos benefícios</Text>

          <TouchableOpacity style={styles.signupButton} onPress={signInWithGoogle}>
            <Icon name="google" size={20} color="#DB4437" />
            <Text style={styles.buttonText}>Criar com o Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupButton}>
            <Icon name="facebook" size={20} color="#4267B2" />
            <Text style={styles.buttonText}>Criar com o Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Cadastro2')}>
            <Icon name="envelope" size={20} color="#333" />
            <Text style={styles.buttonText}>Criar com seu e-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Já possui uma conta? Faça login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  signupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  loginText: {
    color: '#53a65b',
    marginTop: 20,
    fontSize: 16,
  },
});