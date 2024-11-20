import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const categoryImages = {
  'Parques': require('../assets/Parques.jpg'),
  'Museu': require('../assets/exemploMuseu.jpg'),
  'Shopping': require('../assets/exemploShopping.jpeg'),
  'Teatro': require('../assets/exemploTeatro.jpg'),
  'Mercados e feiras locais': require('../assets/mercadolocal.jpeg'),
  'Cinemas': require('../assets/exemploCinema.jpg'),
};

const destinationImages = {
  'Parque Ibirapuera': require('../assets/ParqueIbirapuera.jpg'),
  'Aquário de São Paulo': require('../assets/Aquario.jpg')
};

const InicialTour = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: '#53a65b' }]}>
        <Image source={require('../assets/Logotipo1.png')} style={styles.logo} />
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Filtros')} style={styles.headerIcon}>
            <Icon name="filter" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')} style={styles.headerIcon}>
            <Icon name="cog" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#666" />
          <TextInput 
            style={styles.searchInput}
            placeholder="Pesquisar destinos..."
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.categoriesHeader}>
          <Text style={styles.sectionTitle}>Suas preferências de destinos</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {Object.keys(categoryImages).map((category, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.categoryItem}
              onPress={() => {
                if (category === 'Parques') {
                  navigation.navigate('Parques'); 
                } else if (category === 'Museu') {
                  navigation.navigate('Museu'); 
                } else if (category === 'Shopping') {
                  navigation.navigate('Shopping'); 
                } else if (category === 'Teatro') {
                  navigation.navigate('Teatro'); 
                } else if (category === 'Mercados e feiras locais') {
                  navigation.navigate('Mercados'); 
                } else if (category === 'Cinemas') {
                  navigation.navigate('Cinemas'); 
                }
              }}
            >
              <LinearGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']} style={styles.categoryGradient}>
                <Image source={categoryImages[category]} style={styles.categoryImage} />
                <Text style={styles.categoryText}>{category}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Recomendações de destinos</Text>

        <View style={styles.destinationsContainer}>
          {Object.keys(destinationImages).map((place, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.destinationItem} 
              onPress={() => {
                if (place === 'Parque Ibirapuera') {
                  navigation.navigate('ParqueIbirapuera'); 
                } else if (place === 'Aquário de São Paulo') {
                  navigation.navigate('Aquario'); 
                }
              }}
            >
              <Image source={destinationImages[place]} style={styles.destinationImage} />
              <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.destinationGradient}>
                <Text style={styles.destinationTitle}>{place}</Text>
                <Text style={styles.destinationDescription}>Descubra a beleza natural</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        {['home', 'map',].map((icon, index) => (
          <TouchableOpacity key={index} style={styles.footerButton}>
            <Icon name={icon} size={24} color={index === 0 ? "#53a65b" : "#757575"} />
            <Text style={[styles.footerButtonText, index === 0 && styles.activeFooterButtonText]}>
              {icon.charAt(0).toUpperCase() + icon.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 20,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
    color: '#333',
  },
  categoriesContainer: {
    marginBottom: 25,
  },
  categoryItem: {
    marginRight: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  categoryGradient: {
    width: 150,
    height: 100,
    justifyContent: 'flex-end',
    padding: 10,
  },
  categoryImage: {
    ...StyleSheet.absoluteFillObject,
    width: 150,
    height: 100,
    borderRadius: 15,
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  destinationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  destinationItem: {
    width: '48%',
    height: 200,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  destinationImage: {
    width: '100%',
    height: '100%',
  },
  destinationGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '60%',
    justifyContent: 'flex-end',
    padding: 15,
  },
  destinationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  destinationDescription: {
    fontSize: 14,
    color: '#eee',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    marginTop: 4,
    fontSize: 12,
    color: '#757575',
  },
  activeFooterButtonText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  logo: {
    width: 200, 
    height: 100,
    resizeMode: 'contain', // para manter a proporção
  },
});

export default InicialTour;