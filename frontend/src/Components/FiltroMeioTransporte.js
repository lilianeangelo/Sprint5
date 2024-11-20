import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para ícones

const FiltroMeioTransporte = ({ navigation }) => {
  const [opcoesMeioTransporte, setOpcoesMeioTransporte] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/meios_transporte'); // Substitua pelo endereço da sua API
        const data = await response.json();
        setOpcoesMeioTransporte(data);
      } catch (error) {
        console.error('Erro ao buscar os dados: ', error);
      }
    };

    fetchData();
  }, []);

  const selecionarMeio = (meio) => {
    navigation.navigate('Filtros', { meioTransporte: meio });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Meio de Transporte</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>X</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Qual meio de transporte você deseja utilizar?</Text>

      <FlatList
        data={opcoesMeioTransporte}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.opcao}
            onPress={() => selecionarMeio(item.label)}
          >
            <View style={styles.optionContent}>
              <MaterialIcons name={item.icon} size={24} color="#53a65b" style={styles.icon} />
              <Text style={styles.opcaoTexto}>{item.label}</Text>
            </View>
            <View style={styles.radio} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f5e9', // Cor de fundo suave
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#53a65b',
  },
  closeButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#53a65b',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#555',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
    marginTop: 30, // Aumenta a margem superior
  },
  opcao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#c8e6c9', // Verde claro
    backgroundColor: '#fff', // Fundo branco para as opções
    borderRadius: 8,
    marginVertical: 5,
  },
  optionContent: {
    flexDirection: 'row',
    paddingLeft: 10, // Adiciona espaço à esquerda do conteúdo da opção
  },
  icon: {
    marginRight: 30, // Adiciona espaço à direita do ícone
  },
  opcaoTexto: {
    fontSize: 16,
    marginLeft: 10,
    color: '#555',
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#53a65b',
    backgroundColor: 'transparent', // Fundo transparente
    marginLeft: 40,
    marginRight: 30, 
  },
});

export default FiltroMeioTransporte;
