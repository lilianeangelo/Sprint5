import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Filtros = ({ navigation, route }) => {
  const { meioTransporte = 'Não selecionado', rotaEscolhida = 'Não selecionado' } = route.params || {};

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Iniciar Trajeto</Text>
      
      
      <TouchableOpacity 
        style={styles.filterOption}
        onPress={() => navigation.navigate('EscolherRota')}
      >
        <Text style={styles.optionText}>Escolher Rotas</Text>
        <View style={styles.optionRightContent}>
          <Text style={styles.optionValue}>{rotaEscolhida}</Text>
          <Text style={styles.chevron}>›</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.filterOption}
        onPress={() => navigation.navigate('FiltroMeioTransporte')}
      >
        <Text style={styles.optionText}>Meio de Transporte</Text>
        <View style={styles.optionRightContent}>
          <Text style={styles.optionValue}>{meioTransporte}</Text>
          <Text style={styles.chevron}>›</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.applyButton}
        onPress={() => navigation.navigate('InicialTour')}
      >
        <Text style={styles.applyButtonText}>Aplicar Filtros</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
    marginBottom: 50,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000000',
  },
  filterOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#53a65b',
  },
  optionText: {
    fontSize: 18,
    color: '#000000',
  },
  optionRightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionValue: {
    fontSize: 16,
    color: '#555', // Cor neutra
    marginRight: 5,
  },
  chevron: {
    fontSize: 20,
    color: '#888',
  },
  applyButton: {
    backgroundColor: '#53a65b',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Filtros;