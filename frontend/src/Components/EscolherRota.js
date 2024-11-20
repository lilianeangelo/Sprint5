import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native';

const API_KEY = "AIzaSyA02PzIrWbUx1j8iw0baLByBKyxBfR_EWQ"; // Substitua pela sua API Key do Google Places

const EscolherRota = ({ navigation }) => {
  const [rota, setRota] = useState('');
  const [sugestoes, setSugestoes] = useState([]);

  const handleInputChange = async (text) => {
    setRota(text);

    if (text.length > 2) {
      const endpoint = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=${API_KEY}&components=country:br`;
      
      try {
        const response = await fetch(endpoint);
        const data = await response.json();

        if (data.predictions) {
          setSugestoes(data.predictions.map((item) => item.description));
        } else {
          setSugestoes([]);
        }
      } catch (error) {
        console.error("Erro ao buscar sugestões:", error);
      }
    } else {
      setSugestoes([]);
    }
  };

  const selectSuggestion = (suggestion) => {
    setRota(suggestion);
    setSugestoes([]);
    navigation.navigate('Trajeto', { rotaEscolhida: suggestion });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o endereço ou local"
          value={rota}
          onChangeText={handleInputChange}
        />
      </View>

      {sugestoes.length > 0 && (
        <FlatList
          data={sugestoes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestion}
              onPress={() => selectSuggestion(item)}
            >
              <Text style={styles.suggestionText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={() => confirmarRota()}>
        <Text style={styles.buttonText}>Confirmar Rota</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  suggestion: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  suggestionText: {
    fontSize: 16,
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

export default EscolherRota;
