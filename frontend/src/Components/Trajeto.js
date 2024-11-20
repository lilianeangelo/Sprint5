// src/Components/Trajeto.js

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const { width, height } = Dimensions.get('window');

MapboxGL.setAccessToken('pk.eyJ1IjoibGlsaWFuZWFuZ2VsbyIsImEiOiJjbTM2ZWY3ZGswNGVnMnFvajZmMHBvZmlmIn0.kZGP54iwCMq9nqKigcb-0Q');

export default function Trajeto({ route, navigation }) {
  const { meioTransporte } = route.params;
  const [currentLocation, setCurrentLocation] = useState([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setCurrentLocation([position.coords.longitude, position.coords.latitude]);
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Trajeto</Text>
      <Text style={styles.description}>Meio de Transporte Selecionado: {meioTransporte}</Text>
      <MapboxGL.MapView style={styles.map} styleURL="mapbox://styles/lilianeangelo/cm3owhw8j002t01sg0zz166yr">
        <MapboxGL.Camera zoomLevel={14} centerCoordinate={currentLocation} />
        <MapboxGL.UserLocation visible={true} />
      </MapboxGL.MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OpcoesRota', { meioTransporte })}>
          <Text style={styles.buttonText}>Iniciar Trajeto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Encerrar Trajeto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  map: {
    width: width * 0.9,
    height: height * 0.5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#53a65b',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
