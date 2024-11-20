import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BuscaLocais = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const places = [
    {
      id: '1',
      name: "Fernando de Noronha",
      image: "https://www.jettdeck.com.br/wp-content/uploads/2021/02/noronha-blog.jpg",
      description: "O arquipélago de Fernando de Noronha é bem conhecido entre os amantes de ecoturismo, por isso é considerado o paraíso ecológico brasileiro.",
      rating: 4.5,
    },
    {
      id: '2',
      name: "Foz do Iguaçu",
      image: "https://www.jettdeck.com.br/wp-content/uploads/2021/02/foz-blog.jpg",
      description: "A cidade que abriga as Cataratas do Iguaçu e o Parque Nacional do Iguaçu também traz muitas opções para quem busca o turismo ecológico. Lá você vai encontrar atrativos que contemplam a fauna e a flora, assim como trilhas, passeios de bicicleta, passeios de caiaque e SUP, além de esportes radicais como o rafting.",
      rating: 4.8,
    },
    {
      id: '3',
      name: "Floresta Amazônica",
      image: "https://www.jettdeck.com.br/wp-content/uploads/2021/02/amazonia-blog.jpg",
      description: "A Amazônia é um dos melhores destinos para os que gostam de navegar. De maio a setembro é a época de chuva na região, onde acontecem as cheias nos rios e formam-se igapós. Durante esse período é possível navegar na altura das copas das árvores, que é considerada, acima de tudo, uma das épocas mais bonitas para visitar a região",
      rating: 4.6,
    },
  ];

  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderPlaceItem = ({ item }) => (
    <View style={styles.placeItem}>
      <Image source={{ uri: item.image }} style={styles.placeImage} />
      <View style={styles.placeInfo}>
        <Text style={styles.placeName}>{item.name}</Text>
        <Text style={styles.placeDescription}>{item.description}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
        </View>
      </View>
    </View>
  );

  const handleDeleteAccount = () => {
    // Lógica para excluir a conta do usuário
    Alert.alert('Conta excluída', 'Sua conta foi excluída com sucesso.');
    setIsDeleteModalVisible(false);
    setIsProfileVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Buscar Destinos</Text>
        <TouchableOpacity onPress={() => setIsProfileVisible(true)}>
          <Ionicons name="person-circle" size={40} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar destinos..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredPlaces}
        keyExtractor={(item) => item.id}
        renderItem={renderPlaceItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      {/* Tela lateral do perfil */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isProfileVisible}
        onRequestClose={() => setIsProfileVisible(false)}
      >
        <View style={styles.profileContainer}>
          <Text style={styles.profileTitle}>Perfil do Usuário</Text>
          <TextInput
            style={styles.profileInput}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            editable={false}
          />
          <TextInput
            style={styles.profileInput}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.profileInput}
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileButtonText}>Atualizar Dados Cadastrais</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.profileButton, { backgroundColor: '#e74c3c' }]}
            onPress={() => setIsDeleteModalVisible(true)}
          >
            <Text style={styles.profileButtonText}>Excluir Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsProfileVisible(false)}>
            <Text style={styles.closeProfileText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Modal de confirmação de exclusão */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isDeleteModalVisible}
        onRequestClose={() => setIsDeleteModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Deseja realmente excluir sua conta?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#e74c3c' }]}
                onPress={handleDeleteAccount}
              >
                <Text style={styles.modalButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsDeleteModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  placeItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeInfo: {
    padding: 15,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  placeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#333',
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  profileButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeProfileText: {
    color: '#3498db',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BuscaLocais;