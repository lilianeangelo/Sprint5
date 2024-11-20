import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const parkDetails = [
  {
    title: 'Parque Central',
    petsAllowed: true,
    closingTime: '22:00',
    restaurants: ['Restaurante Da Vila', 'Bistrô Del Parque', 'Café Verde'],
    nearbyDestinations: ['Museu Histórico', 'Jardim Botânico'],
    image: require('../assets/parqueCentral.jpg'),
  },
  {
    title: 'Parque Villa Lobos',
    petsAllowed: false,
    closingTime: '19:00',
    restaurants: ['Córtes', 'ICL Brasserie'],
    nearbyDestinations: ['Roda Rico São Paulo', 'Teatro Frei Caneca'],
    image: require('../assets/parqueVilaLobos.jpg'),
  },
  {
    title: 'Parque Ecológico do Tietê',
    petsAllowed: true,
    closingTime: '17:00',
    restaurants: ['Restaurante 339', 'Bar do Linguiça'],
    nearbyDestinations: ['Neo Quimica Arena', 'Teatro Flávio Império'],
    image: require('../assets/parqueEcologico.jpg'),
  },
  {
    title: 'Parque da Independência',
    petsAllowed: true,
    closingTime: '20:00',
    restaurants: ['Nico Pasta & Basta', 'Magic Chicken'],
    nearbyDestinations: ['Museu Paulista', 'Museu do Ipiranga'],
    image: require('../assets/parqueInde.jpg'),
  },
  {
    title: 'Horto Florestal',
    petsAllowed: false,
    closingTime: '18:00',
    restaurants: ['Zekafe', 'Brunch no palácio do Horto'],
    nearbyDestinations: ['Pinacoteca do Estado de São Paulo', 'Teatro Porto Seguro'],
    image: require('../assets/hortoFlorestal.jpg'),
  },
  {
    title: 'Parque Do Povo',
    petsAllowed: true,
    closingTime: '22:00',
    restaurants: ['Bar Espirito Santo', 'Varanda JK Iguatemi'],
    nearbyDestinations: ['Vento Forte - Sala dos Pés- Teatro', 'Shopping Iguatemi'],
    image: require('../assets/parquePovo.jpg'),
  },
  {
    title: 'Parque Estadual da Cantareira',
    petsAllowed: false,
    closingTime: '17:00',
    restaurants: ['Osteria da onça', 'Zekafe'],
    nearbyDestinations: ['Pinacoteca do Estado de São Paulo', 'Horto Florestal'],
    image: require('../assets/ParqueEstadual.jpg'),
  },
  {
    title: 'Parque Da Água Branca',
    petsAllowed: true,
    closingTime: '20:00',
    restaurants: ['DoRo Gastronomia', 'A Baianeira'],
    nearbyDestinations: ['Feira do Produtor Orgânico', 'Espaço Unimed'],
    image: require('../assets/ParqueAgua.jpg'),
  },
  {
    title: 'Parque Burle Marx',
    petsAllowed: true,
    closingTime: '19:00',
    restaurants: ['Tangara Jean-Georges', 'Pateo do Palácio'],
    nearbyDestinations: ['Parque Ibirapuera', 'Teatro Alfa'],
    image: require('../assets/ParqueBurle.jpg'),
  },
  {
    title: 'Parque Tenente Siqueira Campos',
    petsAllowed: true,
    closingTime: '20:00',
    restaurants: ['Noah Gastronomia Paulista', 'Seen - Restaurant & Bar'],
    nearbyDestinations: ['Avenida Paulista', 'Feira de antiguidades da Paulista'],
    image: require('../assets/ParqueTenente.jpg'),
  },
  {
    title: 'Parque da Aclimação',
    petsAllowed: true,
    closingTime: '20:00',
    restaurants: ['Mr.Texas Pizza Pan', 'Moah Restaurante'],
    nearbyDestinations: ['Biblioteca Municipal Raul Bopp', 'Bairro da Liberdade'],
    image: require('../assets/ParqueAclimacao.jpg'),
  },
  {
    title: 'Parque do Carmo',
    petsAllowed: true,
    closingTime: '20:00',
    restaurants: ['Au Au Lanches', 'Sushi D Carmo'],
    nearbyDestinations: ['Sesc Itaquera', 'Neo Química Arena'],
    image: require('../assets/parque-do-carmo.jpg'),
  },
];

const Parques = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPark, setSelectedPark] = useState(null);

  const handleParkPress = (park) => {
    setSelectedPark(park);
    setModalVisible(true);
  };

  const handleStartRoute = () => {
    setModalVisible(false);
    // Navegação para a tela de trajeto
    // navigation.navigate('Trajeto', { park: selectedPark });
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
        {parkDetails.map((park, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => handleParkPress(park)}
          >
            <View style={styles.card}>
              <Image source={park.image} style={styles.image} />
              <Text style={styles.cardTitle}>{park.title}</Text>
              <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                  <Icon name={park.petsAllowed ? 'paw' : 'ban'} size={20} color={park.petsAllowed ? '#4CAF50' : '#e74c3c'} />
                  <Text style={styles.infoText}>
                    Pets: {park.petsAllowed ? 'Permitido' : 'Não permitido'}
                  </Text>
                </View>
                <View style={styles.infoRow}>
                  <Icon name="clock-o" size={20} color="#666" />
                  <Text style={styles.infoText}>Fecha às: {park.closingTime}</Text>
                </View>
              </View>
              <Text style={styles.subTitle}>Restaurantes Próximos:</Text>
              {park.restaurants.map((restaurant, idx) => (
                <Text key={idx} style={styles.listItem}>{restaurant}</Text>
              ))}
              <Text style={styles.subTitle}>Destinos Próximos:</Text>
              {park.nearbyDestinations.map((destination, idx) => (
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
            <Text style={styles.modalSubtitle}>{selectedPark?.title}</Text>
            
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
              <Text style={styles.modalButtonText}>Voltar para Parques</Text>
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

export default Parques;