import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const AUTO_CHANGE_INTERVAL = 2000; // 2 segundos para mudar automaticamente

export default function Integracao3({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('EscolherPreferencias1');
    }, AUTO_CHANGE_INTERVAL);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/Integracao3.png')} style={styles.image} />
        <Text style={styles.title}>Descubra lugares incríveis perto de você</Text>
        <Text style={styles.description}>
          Oferecemos dicas para minimizar o impacto ambiental
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.pageIndicator}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} /> {/* A última bolinha é a ativa */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '80%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    lineHeight: 24,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  pageIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#4CAF50',
  },
});