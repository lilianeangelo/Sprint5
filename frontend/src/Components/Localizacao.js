import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

const Localizacao = ({ route }) => {
  const { passos } = route.params;
  const [posicaoAtual, setPosicaoAtual] = useState(null);

  // Obter localização do usuário
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permissão de localização negada');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setPosicaoAtual(location.coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {posicaoAtual && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: posicaoAtual.latitude,
            longitude: posicaoAtual.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: posicaoAtual.latitude,
              longitude: posicaoAtual.longitude,
            }}
            title="Minha Posição"
          />
          {passos.map((step, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: step.inicio.lat,
                longitude: step.inicio.lng,
              }}
              title={`Passo ${index + 1}`}
              description={step.instrucao.replace(/<\/?[^>]+(>|$)/g, '')}
            />
          ))}
          <Polyline
            coordinates={passos.map((step) => ({
              latitude: step.inicio.lat,
              longitude: step.inicio.lng,
            }))}
            strokeColor="#007BFF"
            strokeWidth={4}
          />
        </MapView>
      )}
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          {passos[0].instrucao.replace(/<\/?[^>]+(>|$)/g, '')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  instructionContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  instructionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Localizacao;
