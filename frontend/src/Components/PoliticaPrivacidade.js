import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PoliticaPrivacidade = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Política de Privacidade</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.privacyText}>
          <Text style={styles.sectionTitle}>1. Introdução</Text>{"\n"}
          Bem-vindo ao TourGuide. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos suas informações ao utilizar nosso aplicativo. Ao acessar o TourGuide, você concorda com os termos desta Política de Privacidade.{"\n\n"}

          <Text style={styles.sectionTitle}>2. Informações que Coletamos</Text>{"\n"}
          O TourGuide pode coletar as seguintes informações:{"\n"}
          - Informações fornecidas diretamente: Nome, e-mail, preferências de viagem, idioma, e qualquer outro dado fornecido durante o cadastro ou ao utilizar o app.{"\n"}
          - Informações coletadas automaticamente: Dados de localização (se autorizado), endereço IP, informações sobre o dispositivo (tipo, modelo, sistema operacional), histórico de navegação e interações no aplicativo.{"\n"}
          - Cookies e Tecnologias Similares: Utilizamos cookies para melhorar a experiência de navegação, analisar tendências e coletar informações demográficas.{"\n\n"}

          <Text style={styles.sectionTitle}>3. Como Utilizamos as Informações</Text>{"\n"}
          As informações coletadas podem ser usadas para:{"\n"}
          - Personalizar sua experiência no aplicativo.{"\n"}
          - Fornecer recomendações de destinos turísticos, eventos e atrações.{"\n"}
          - Enviar notificações, atualizações e comunicações relevantes sobre destinos turísticos.{"\n"}
          - Melhorar e personalizar o conteúdo oferecido.{"\n"}
          - Cumprir com obrigações legais, responder a solicitações de autoridades e proteger os direitos do TourGuide.{"\n\n"}

          <Text style={styles.sectionTitle}>4. Compartilhamento de Informações</Text>{"\n"}
          Nós podemos compartilhar suas informações nas seguintes circunstâncias:{"\n"}
          - Parceiros de Turismo: Com parceiros e fornecedores para oferecer pacotes, promoções e descontos de viagem relevantes.{"\n"}
          - Prestadores de Serviços: Empresas que nos ajudam a operar o TourGuide, como serviços de análise, marketing e suporte ao cliente.{"\n"}
          - Conformidade Legal: Quando necessário para cumprir leis, regulamentos ou ordens judiciais.{"\n\n"}

          <Text style={styles.sectionTitle}>5. Segurança</Text>{"\n"}
          Adotamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acessos não autorizados, alterações, divulgação ou destruição. No entanto, apesar de nossos esforços, não podemos garantir a segurança absoluta dos dados transmitidos pela internet.{"\n\n"}

          <Text style={styles.sectionTitle}>6. Seus Direitos</Text>{"\n"}
          Dependendo da sua localização, você pode ter os seguintes direitos:{"\n"}
          - Acessar, corrigir ou excluir seus dados pessoais.{"\n"}
          - Solicitar a restrição do processamento de seus dados.{"\n"}
          - Retirar o consentimento a qualquer momento, se aplicável.{"\n"}
          - Solicitar a portabilidade dos seus dados.{"\n"}
          Para exercer seus direitos, entre em contato conosco através das informações fornecidas na seção "Contato".{"\n\n"}

          <Text style={styles.sectionTitle}>7. Dados de Localização</Text>{"\n"}
          O TourGuide pode coletar dados de localização para oferecer sugestões personalizadas de atrações próximas. Você pode controlar essa permissão nas configurações do seu dispositivo. A recusa pode afetar a funcionalidade do aplicativo.{"\n\n"}

          <Text style={styles.sectionTitle}>8. Retenção de Dados</Text>{"\n"}
          Suas informações serão mantidas apenas pelo tempo necessário para cumprir os objetivos descritos nesta Política de Privacidade, ou conforme exigido por lei.{"\n\n"}

          <Text style={styles.sectionTitle}>9. Links para Terceiros</Text>{"\n"}
          O aplicativo pode conter links para sites ou serviços de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites, e recomendamos a leitura de suas políticas de privacidade.{"\n\n"}

          <Text style={styles.sectionTitle}>10. Alterações na Política de Privacidade</Text>{"\n"}
          O TourGuide pode atualizar esta Política de Privacidade periodicamente. Notificaremos sobre quaisquer mudanças importantes diretamente no aplicativo ou por outros meios apropriados.{"\n\n"}

          <Text style={styles.sectionTitle}>11. Contato</Text>{"\n"}
          Para dúvidas, sugestões ou reclamações sobre esta Política de Privacidade, entre em contato conosco através do e-mail contatotourguide@gmail.com ou pelo nosso suporte no próprio aplicativo.
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  privacyText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
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

export default PoliticaPrivacidade;