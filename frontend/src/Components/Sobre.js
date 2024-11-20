import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Sobre = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sobre o TourGuide</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.description}>
          O TourGuide é um aplicativo inovador de geolocalização criado para transformar a maneira como você explora o turismo. Nosso objetivo é promover uma experiência turística mais consciente, conectando você aos melhores destinos que valorizam a preservação ambiental, a cultura local e o desenvolvimento sustentável das comunidades.{"\n\n"}
          
          Com o TourGuide, você tem a oportunidade de descobrir locais turísticos que não apenas encantam pelos seus paisagens e história, mas também contribuem para o bem-estar das regiões e a conservação dos nossos recursos naturais. Através de nossa plataforma, você será guiado por roteiros e pontos turísticos que incentivam práticas sustentáveis, oferecendo um turismo que respeita a natureza e fortalece as comunidades locais.{"\n\n"}
          
          Seja você um turista em busca de novas aventuras ou um morador querendo redescobrir o que há de melhor em sua própria cidade, o TourGuide é a sua ferramenta para explorar, aprender e apoiar iniciativas que fazem a diferença no mundo. Junte-se a nós nessa jornada e faça parte de um movimento pelo turismo mais sustentável e consciente!
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeButtonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30, // Aumentado para mais espaçamento
    marginTop: 20, // Adicionado para mover o cabeçalho para baixo
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 80, // Espaço para o botão de fechar
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
    marginTop: 20, // Aumentado para mais espaçamento
  },
  closeButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#ff3b3b',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Sobre;