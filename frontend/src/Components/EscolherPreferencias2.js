import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const opcoesCulinaria = [
  { id: 1, texto: 'Lanches', icone: 'fast-food-outline' },
  { id: 2, texto: 'Massas', icone: 'pizza-outline' },
  { id: 3, texto: 'Doces e bolos', icone: 'restaurant-outline' },
  { id: 4, texto: 'Sorvete e açaí', icone: 'ice-cream-outline' },
];

const EscolherPreferencias2 = ({ navigation }) => {
  const [selecoes, setSelecoes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleSelecao = (id) => {
    setSelecoes(prevSelecoes => 
      prevSelecoes.includes(id)
        ? prevSelecoes.filter(item => item !== id)
        : [...prevSelecoes, id]
    );
  };

  const handleContinuar = () => {
    if (selecoes.length === 0) {
      setModalVisible(true);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#53a65b" />
        </TouchableOpacity>
        <Text style={styles.titulo}>
          O que você costuma comer em seus passeios?
        </Text>
        <View style={{ width: 24 }} />
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
        {opcoesCulinaria.map((opcao) => (
          <TouchableOpacity
            key={opcao.id}
            style={[styles.opcao, selecoes.includes(opcao.id) && styles.opcaoSelecionada]}
            onPress={() => toggleSelecao(opcao.id)}
          >
            <Ionicons 
              name={opcao.icone} 
              size={24} 
              color={selecoes.includes(opcao.id) ? '#FFFFFF' : '#4A4A4A'} 
            />
            <Text style={[styles.opcaoTexto, selecoes.includes(opcao.id) && styles.opcaoTextoSelecionada]}>
              {opcao.texto}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.botaoContinuar}
        onPress={handleContinuar}
      >
        <Text style={styles.botaoContinuarTexto}>Finalizar</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Por favor, selecione pelo menos uma preferência para continuar.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: width < 400 ? 16 : 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  scrollView: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  opcao: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#F0F0F0',
  },
  opcaoSelecionada: {
    backgroundColor: '#53a65b',
  },
  opcaoTexto: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4A4A4A',
  },
  opcaoTextoSelecionada: {
    color: '#FFFFFF',
  },
  botaoContinuar: {
    backgroundColor: '#53a65b',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  botaoContinuarTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    fontSize: 16,
    color: '#333',
  },
  modalButton: {
    backgroundColor: '#53a65b',
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EscolherPreferencias2;