import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

export default function CodigoVerificacao({ navigation }) {
  const [code, setCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar o modal

  const handleCodeVerification = () => {
    if (code.length === 6) {
      navigation.navigate('RedefinirSenha');
    } else {
      setModalVisible(true); // Abre o modal se o código for inválido
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.backButton, { marginTop: 20 }]} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="#53a65b" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.helpButton, { marginTop: 20 }]} onPress={() => navigation.navigate('CentralAjuda')}>
        <Icon name="question-circle" size={30} color="#53a65b" />
      </TouchableOpacity>

      <Image
        source={require('../assets/autenticacao.png')}
        style={styles.headerImage}
      />

      <Text style={styles.title}>Código de Verificação</Text>

      <Text style={styles.description}>
        Um email foi enviado para seu endereço com um código de verificação. Insira-o abaixo para continuar.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Código de verificação"
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
        maxLength={6}
      />

      <TouchableOpacity style={styles.button} onPress={handleCodeVerification}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>

      {/* Modal para mensagem de erro */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Código inválido. Por favor, insira um código de 6 dígitos.</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    fontSize: width < 400 ? 20 : 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  description: {
    fontSize: width < 400 ? 14 : 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: '#53a65b',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#53a65b',
    padding: 10,
    borderRadius: 5,
  },
});