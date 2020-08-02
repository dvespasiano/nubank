import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import styledComponents from '../../components/styledComponents';
import { View, StyleSheet, Text } from 'react-native';
//componentes
import Header from '../../components/Header'
import Tabs from '../../components/tabs'

const Main = () => {
  return (
    <View style={styledComponents.container}>
      <Header />
      <Icon name="attach-money" size={28} color="#666" />
      <Icon name="visibility-off" size={28} color="#666" />
      <View>
        <Text>Saldo disponível</Text>
        <Text>R$ 853.873,00</Text>
      </View>
      <View>
        <Text>Transferencia de R$ 40,00 recebida de Cara Delevingne as 15:34</Text>
      </View>
      <Tabs />
    </View >

  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    margin: '0 20px',
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30
  },
  cardFooter: {
    padding: 30,
    background: '#eee',
    borderRadius: 4
  },
  cardContent: {
    flex: 1,
    padding: '0 30px',
    justifyContent: 'center'
  },
  title: {
    fontSize: 13,
    color: '#999'
  },
  description: {
    fontSize: 32,
    marginTop: 3,
    color: '#333'
  },
  anotation: {
    fontSize: 12,
    color: '#333'
  },


});

export default Main;