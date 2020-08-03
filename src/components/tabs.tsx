import React from 'react';
import { View, StyleSheet, ScrollView, Text, Animated } from 'react-native';
import styledComponents from './StyledComponents';
import { Feather as Icon } from '@expo/vector-icons';

const Tabs = (translateY: any) => {
  return (
    <Animated.View style={styledComponents.container, transform:[{
      translateY: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 30],
        extrapolate: 'clamp'
      })
    }], opacity: translateY.interpolate({
      inputRange: [0, 380],
      outputRange: [1, 0.3],
      extrapolate: 'clamp'
    })
}>
  <View style={styles.container}>
    <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.item}>
        <Icon name="person-add" size={24} color='#FFF' />
        <Text style={styles.text}>Indicar amigos</Text>
      </View>
      <View style={styles.item}>
        <Icon name="chat-buble-outline" size={24} color='#FFF' />
        <Text style={styles.text}>Cobrar</Text>
      </View>
      <View style={styles.item}>
        <Icon name="arrow-downward" size={24} color='#FFF' />
        <Text style={styles.text}>Depositar</Text>
      </View>
      <View style={styles.item}>
        <Icon name="arrow-upward" size={24} color='#FFF' />
        <Text style={styles.text}>Transferir</Text>
      </View>
      <View style={styles.item}>
        <Icon name="lock" size={24} color='#FFF' />
        <Text style={styles.text}>Bloquear cartão</Text>
      </View>
      <View style={styles.item}>
        <Icon name="person-add" size={24} color='#FFF' />
        <Text style={styles.text}>Indicar amigos</Text>
      </View>
    </ScrollView>
  </View >
    </Animated.View >
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 20
  },
  scrollView: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 3,
    marginLeft: 10,
    padding: 10,
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 13,
    color: '#fff'
  }
});

export default Tabs;