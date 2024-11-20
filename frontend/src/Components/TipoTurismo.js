import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const tiposTurismo = [
  'Turismo com aventura radical',
  'Agroturismo',
  'Bem-estar e saúde',
  // Adicione mais tipos de turismo conforme necessário
];

const TipoTurismo = ({ navigation, route }) => {
  const filtrosExistentes = route.params?.filtros || {};
  const [tipoSelecionado, setTipoSelecionado] = useState(filtrosExistentes.tipoTurismo || '');

  const confirmarTipo = () => {
    const novosFiltros = {
      ...filtrosExistentes,
      tipoTurismo: tipoSelecionado
    };
    navigation.navigate('Filtros', { filtros: novosFiltros });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Tipo de turismo</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>X</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Qual o tipo de turismo desejado por você?</Text>

      <ScrollView>
        {tiposTurismo.map((tipo) => (
          <TouchableOpacity
            key={tipo}
            style={styles.opcao}
            onPress={() => setTipoSelecionado(tipo)}
          >
            <Text style={styles.opcaoTexto}>{tipo}</Text>
            <View style={[
              styles.radio,
              tipo === tipoSelecionado && styles.radioSelecionado
            ]} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.confirmarButton} onPress={confirmarTipo}>
        <Text style={styles.confirmarButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    padding: 20,
  },
  opcao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  opcaoTexto: {
    fontSize: 16,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  radioSelecionado: {
    borderColor: '#4CAF50',
    backgroundColor: '#4CAF50',
  },
  confirmarButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TipoTurismo;