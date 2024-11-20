import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const pracaDetails = [
  {
    title: 'Mercado Municipal de São Paulo',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Raful', 'Mortadela Brasil', 'Bar do Mané'],
    nearbyDestinations: ['Mercado Municipal Kinjo Yamato', 'Museu Catavento'],
    image: require('../assets/mercadoMunicipal.jpg'),
  },
  {
    title: 'Mercado Municipal de Santo Amaro',
    petsAllowed: false,
    closingTime: '22:00',
    restaurants: ['Di Sorella', 'Yamagowa Sushi', 'Padaria Santa Clara'],
    nearbyDestinations: ['Teatro Paulo Eiro', 'Catedral Anglicana de São Paulo', 'Paróquia Santo Agostinho'],
    image: require('../assets/MercadoMunicipalSA.jpg'),
  },
  {
    title: 'Feira do Pacaembu',
    petsAllowed: false,
    closingTime: 'Não possui horário',
    restaurants: ['Pobre Juan', 'Camelo Pizzaria', 'Carlota'],
    nearbyDestinations: ['Estádio do Pacaembu', 'Museu de Arte Brasileira', 'Museu do Futebol'],
    image: require('../assets/feiraPacaembu.jpeg'),
  },
  {
    title: 'Feira do Bixiga',
    petsAllowed: false,
    closingTime: '17:00',
    restaurants: ['Speranza', 'Templo da Carne Marcos Bassi'],
    nearbyDestinations: ['Teatro agora', 'Casa Quena'],
    image: require('../assets/feiraBixiga.jpg'),
  },
  {
    title: 'Feira de Antiguidades da Paulista',
    petsAllowed: true,
    closingTime: '18:00',
    restaurants: ['Noah Gastronomia Paulista', 'Camarada Camarão'],
    nearbyDestinations: ['Museu de Arte de São Paulo', 'Avenida Paulista'],
    image: require('../assets/FeiraAntiguidade.jpg'),
  },
  {
    title: 'Mercado Municipal Kinjo Yamato',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Raful', 'Bar do Mané'],
    nearbyDestinations: ['Mercado Municipal de São Paulo', 'Museu Catavento'],
    image: require('../assets/mercadoMunicipalKY.jpg'),
  },
  {
    title: 'Feirinha do Trianon/MASP',
    petsAllowed: true,
    closingTime: '18:00',
    restaurants: ['Effendi', 'Lótus Restaurantes Vegetariano'],
    nearbyDestinations: ['Museu da Língua Portuguesa', 'Igreja de São Cristóvão'],
    image: require('../assets/feiraMasp2.png'),
  },
  {
    title: 'Feira da Madrugada Circuito de Compras',
    petsAllowed: false,
    closingTime: '16:00',
    restaurants: ['Bar do Mané', 'Theodora Restaurante'],
    nearbyDestinations: ['Pinacoteca do Estado de São Paulo', 'Mercado Municipal de São Paulo'],
    image: require('../assets/feiraMadrugada.jpg'),
  },
  {
    title: 'CEAGESP',
    petsAllowed: false,
    closingTime: '00:00',
    restaurants: ['Manai Gastronomia', 'Sopa de Cebola do Ceasa'],
    nearbyDestinations: ['Roda Rico', 'Parque Villa Lobos'],
    image: require('../assets/ceagesp.jpg'),
  },
  {
    title: 'Mercado Municipal do Ipiranga',
    petsAllowed: false,
    closingTime: 'Não possui horário',
    restaurants: ['Cantina do Magrão', 'Paellas Pepe'],
    nearbyDestinations: ['Parque Ibirapuera', 'Pinacoteca do Estado de São Paulo'],
    image: require('../assets/mercadoIpiranga.jpg'),
  },
  {
    title: 'Mercado Municipal - Antônio Gomes Sapombemba',
    petsAllowed: false,
    closingTime: '19:00',
    restaurants: ['Pinga ni mim bar', 'Pães e Massas do Italiano'],
    nearbyDestinations: ['Cacau Show', 'Terra Brasil Açai'],
    image: require('../assets/mercadoSapopemba.jpg'),
  },
  {
    title: 'Mercado Municipal de Pinheiros',
    petsAllowed: true,
    closingTime: '19:00',
    restaurants: ['Aguzzo Cucina Italiana', 'Fitó'],
    nearbyDestinations: ['Largo da Batata', 'Casa Natura Musical'],
    image: require('../assets/MercadoPinheiros.jpg'),
  },
];

const Mercados = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMercado, setSelectedMercado] = useState(null);

  const handleMercadoPress = (mercado) => {
    setSelectedMercado(mercado);
    setModalVisible(true);
  };

  const handleStartRoute = () => {
    setModalVisible(false);
    // navegação para a tela de trajeto
    // navigation.navigate('Trajeto', { mercado: selectedMercado });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.botaoVoltar} 
        onPress={() => navigation.navigate('InicialTour')}
      >
        <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      
      <ScrollView>
        {pracaDetails.map((praca, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => handleMercadoPress(praca)}
          >
            <View style={styles.card}>
              <Image source={praca.image} style={styles.image} />
              <Text style={styles.cardTitle}>{praca.title}</Text>
              <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                  <Icon name={praca.petsAllowed ? 'paw' : 'ban'} size={20} color={praca.petsAllowed ? '#4CAF50' : '#e74c3c'} />
                  <Text style={styles.infoText}>
                    Pets: {praca.petsAllowed ? 'Permitido' : 'Não permitido'}
                  </Text>
                </View>
                <View style={styles.infoRow}>
                  <Icon name="clock-o" size={20} color="#666" />
                  <Text style={styles.infoText}>Fecha às: {praca.closingTime}</Text>
                </View>
              </View>
              <Text style={styles.subTitle}>Restaurantes Próximos:</Text>
              {praca.restaurants.map((restaurant, idx) => (
                <Text key={idx} style={styles.listItem}>{restaurant}</Text>
              ))}
              <Text style={styles.subTitle}>Destinos Próximos:</Text>
              {praca.nearbyDestinations.map((destination, idx) => (
                <Text key={idx} style={styles.listItem}>{destination}</Text>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Deseja iniciar trajeto?</Text>
            <Text style={styles.modalSubtitle}>{selectedMercado?.title}</Text>
            
            <TouchableOpacity 
              style={[styles.modalButton, styles.startButton]}
              onPress={handleStartRoute}
            >
              <Text style={styles.modalButtonText}>Iniciar trajeto</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.modalButton, styles.closeButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Voltar para Mercados</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.modalButton, styles.homeButton]}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('InicialTour');
              }}
            >
              <Text style={styles.modalButtonText}>Voltar para Início</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#266951',
  },
  infoContainer: {
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  listItem: {
    fontSize: 16,
    color: '#666',
    marginLeft: 20,
  },
  botaoVoltar: {
    backgroundColor: '#266951',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#266951',
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  modalButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#266951',
  },
  closeButton: {
    backgroundColor: '#757575',
  },
  homeButton: {
    backgroundColor: '#ff3b3b',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Mercados;