import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const OpcoesRota = ({ route }) => {
  const { rotas } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rotas Disponíveis:</Text>
      <FlatList
        data={rotas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rotaContainer}>
            <Text style={styles.rotaText}>{item.descricao}</Text>
          </View>
        )}
      />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  rotaContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rotaText: {
    fontSize: 16,
  },
});

export default OpcoesRota;
