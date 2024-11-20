import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CentralAjuda = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Central de Ajuda</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity style={styles.card}>
          <Icon name="key" size={30} color="#4CAF50" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Como Cadastrar uma Senha</Text>
            <Text style={styles.cardDescription}>
              1. Abra o aplicativo.{'\n'}
              2. Toque em "Começar Jornada" ou pule a apresentação para acessar o app.{'\n'}
              3. Preencha as três telas de preferências do usuário.{'\n'}
              4. Clique no link "Esqueceu sua senha? Clique para cadastrar uma nova senha".{'\n'}
              5. Insira seu e-mail no campo indicado.{'\n'}
              6. Digite o código enviado para o seu e-mail.{'\n'}
              7. Crie uma nova senha.{'\n'}
              Após concluir, você será redirecionado(a) para a tela de login para acessar o aplicativo normalmente.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="user-circle" size={30} color="#2196F3" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Como Colocar uma Foto na Tela de Configurações</Text>
            <Text style={styles.cardDescription}>
              1. Acesse a tela de configurações do aplicativo.{'\n'}
              2. Toque no ícone do perfil ao lado do seu nome.{'\n'}
              3. Selecione a opção para escolher uma imagem da galeria ou tirar uma nova foto.{'\n'}
              4. Escolha a imagem desejada e confirme.{'\n'}
              5. A imagem do perfil será atualizada na tela de configurações.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="trash" size={30} color="#F44336" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Como Excluir uma Conta</Text>
            <Text style={styles.cardDescription}>
              1. Acesse a tela de configurações do aplicativo.{'\n'}
              2. Role até encontrar a opção "Excluir conta" e toque nela.{'\n'}
              3. Um modal de confirmação aparecerá.{'\n'}
              4. Clique em "Sim" para confirmar a exclusão da conta.{'\n'}
              5. Você será redirecionado(a) para a tela de cadastro após a exclusão.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Icon name="sign-out" size={30} color="#FF9800" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Como Sair da Conta</Text>
            <Text style={styles.cardDescription}>
              1. Acesse a tela de configurações do aplicativo.{'\n'}
              2. Toque na opção "Sair".{'\n'}
              3. Um modal de confirmação aparecerá.{'\n'}
              4. Clique em "Sim" para confirmar que deseja sair da conta.{'\n'}
              5. Você será redirecionado(a) para a tela de login.
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.fullWidthButton} onPress={() => navigation.navigate('Configuracoes')}>
        <Text style={styles.buttonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  cardContent: {
    marginLeft: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#757575',
  },
  fullWidthButton: {
    backgroundColor: '#ff3b3b',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%', // Faz o botão ocupar toda a largura
    marginTop: 10, // Adiciona um espaço acima do botão
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CentralAjuda;