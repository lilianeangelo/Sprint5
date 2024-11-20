import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const DetalhesRota = ({ route, navigation }) => {
  const { rota } = route.params;

  const iniciarTrajeto = () => {
    navigation.navigate('Navegacao', { passos: rota.passos });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Rota</Text>
      <Text style={styles.subtitle}>
        Tempo Total: {rota.tempo_total} | Distância Total: {rota.distancia_total}
      </Text>

      <FlatList
        data={rota.passos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.stepContainer}>
            <Text style={styles.stepInstruction}>
              {item.instrucao.replace(/<\/?[^>]+(>|$)/g, '')}
            </Text>
            <Text style={styles.stepDetails}>
              Distância: {item.distancia} | Duração: {item.duracao}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={iniciarTrajeto}>
        <Text style={styles.buttonText}>Iniciar Trajeto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  stepContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  stepInstruction: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepDetails: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetalhesRota;
