import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const { width } = Dimensions.get('window');

const Aquario = ({ navigation }) => {
  const scrollViewRef = useRef();

  const scrollToOptions = () => {
    scrollViewRef.current.scrollTo({ y: 400, animated: true });
  };

  const options = [
    {
      title: "Recinto dos Ursos Polares",
      price: "Pago apenas o ingresso de R$90,00 do Aquário",
      image: require('../assets/RecintoUrsos.jpeg'),
      rating: 1000,
    },
    {
      title: "O Mergulho das Sereias",
      price: "Verificar disponibilidade",
      image: require('../assets/MergulhoSereias.jpg'), 
      rating: 250,
    },
    {
      title: "Tanque dos Tubarões",
      price: "Gratuito",
      image: require('../assets/TanqueTubarao.jpeg'), 
      rating: 345,
    },
    {
      title: "Setor Africa",
      price: "Gratuito",
      image: require('../assets/SetorAfrica.jpeg'), 
      rating: 256,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView ref={scrollViewRef} style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={24} color="#FFF" />
          </TouchableOpacity>
          <Image 
            source={require('../assets/Aquario.jpg')} 
            style={styles.headerImage} 
            resizeMode="cover"
          />
          <View style={styles.headerOverlay}>
            <Text style={styles.title}>Aquario - São Paulo</Text>
            <Text style={styles.info}>Aberto agora: 5:00 - 0:00</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <Text style={styles.sectionTitle}>Informações</Text>
            <View style={styles.infoRow}>
              <Icon name="clock-o" size={20} color="#53a65b" />
              <Text style={styles.infoText}>Duração: 1 hora ou mais</Text>
            </View>
            <View style={styles.infoRow}>
              <Icon name="paw" size={20} color="#53a65b" />
              <Text style={styles.infoText}>Todos os animais são liberados de visitar o parque</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={scrollToOptions}>
            <Text style={styles.buttonText}>Veja as opções</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Principais maneiras de aproveitar o Aquário</Text>
          
          <View style={styles.optionsContainer}>
            {options.map((option, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.optionItem}
                onPress={() => {
                  // navigation.navigate('DetalheOpcao', { option });
                }}
              >
                <Image source={option.image} style={styles.optionImage} />
                <View style={styles.optionDetails}>
                  <Text style={styles.optionTitle}>{option.title}</Text>
                  <Text style={styles.optionPrice}>{option.price}</Text>
                  <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="#FFD700" />
                    <Text style={styles.optionRating}>{option.rating} avaliações</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    height: 220,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 10,
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    paddingTop: 30,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#FFF',
  },
  content: {
    padding: 15,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 15,
    marginLeft: 10,
    color: '#666',
    flex: 1,
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#53a65b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  optionDetails: {
    padding: 15,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  optionPrice: {
    fontSize: 15,
    color: '#53a65b',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionRating: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
});

export default Aquario;