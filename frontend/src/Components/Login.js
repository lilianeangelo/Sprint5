import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider, providerFace } from '../../firebase-config';
import { CommonActions } from '@react-navigation/native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginWithEmail = useCallback(async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('InicialTour');
    } catch (error) {
      Alert.alert('Erro de Login', 'Email ou senha incorretos. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }, [email, password, navigation]);

  const handleSignInWithGoogle = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'InicialTour' }],
          })
        );
      } else {
        throw new Error('Falha na autenticação com Google');
      }
    } catch (error) {
      console.error('Erro no login com Google:', error);
      Alert.alert('Erro', 'Falha no login com Google. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }, [navigation]);

  const handleSignInWithFacebook = useCallback(async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, providerFace);
      navigation.navigate('InicialTour');
    } catch (error) {
      Alert.alert('Erro', 'Falha no login com Facebook. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#53a65b" />
        </TouchableOpacity>

        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>Acesse sua conta para navegar no TourGuide!</Text>

        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha? Clique para cadastrar uma nova senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLoginWithEmail} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.orText}>ou entre com</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={handleSignInWithGoogle} disabled={isLoading}>
            <Icon name="google" size={20} color="#DB4437" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton} onPress={handleSignInWithFacebook} disabled={isLoading}>
            <Icon name="facebook" size={20} color="#4267B2" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro1')}>
          <Text style={styles.registerText}>Não possui conta? <Text style={styles.registerTextBold}>Criar conta</Text></Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  headerContainer: {
    marginTop: 60, // Aumenta o espaço acima do título
    marginBottom: 30, // Mantém o espaço abaixo do subtítulo
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#53a65b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#666',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  registerText: {
    textAlign: 'center',
    color: '#666',
  },
  registerTextBold: {
    fontWeight: 'bold',
    color: '#53a65b',
  },
  forgotPasswordText: {
    color: '#53a65b',
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 14,
  },
});