import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Image } from 'react-native';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logotipo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53a65b',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
  },
});
