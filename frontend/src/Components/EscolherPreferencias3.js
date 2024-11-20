import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const opcoesLugares = [
    { id: 1, texto: 'Hortas comunitárias', icone: 'leaf-outline' },
    { id: 2, texto: 'Bem-estar animal', icone: 'paw-outline' },
    { id: 3, texto: 'Consciência cultural', icone: 'people-outline' },
    { id: 4, texto: 'Eventos de sustentabilidade', icone: 'rose-outline' },
    { id: 5, texto: 'Unidades de conservação ambiental', icone: 'earth-outline' },
];

const EscolherPreferencias3 = ({ navigation }) => {
  const [selecoes, setSelecoes] = useState([]);

  const toggleSelecao = (id) => {
    setSelecoes(prevSelecoes => 
      prevSelecoes.includes(id)
        ? prevSelecoes.filter(item => item !== id)
        : [...prevSelecoes, id]
    );
  };

  const handleFinalizar = () => {
    if (selecoes.length === 0) {
      alert('Por favor, selecione pelo menos uma preferência para continuar.');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.titulo}>
            Você estaria interessado em frequentar lugares que promovam ações voltadas para:
        </Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {opcoesLugares.map((opcao) => (
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
        onPress={handleFinalizar}
      >
        <Text style={styles.botaoContinuarTexto}>Finalizar</Text>
      </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, // Permite que o título ocupe o espaço disponível
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
});

export default EscolherPreferencias3;