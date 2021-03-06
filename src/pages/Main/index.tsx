import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import styledComponents from '../../components/StyledComponents';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
//componentes
import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Menu from '../../components/Menu'

const Main = () => {
  let offset = 0;
  const translateY = new Animated.Value(0)
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true }
  )
  function onHandleStateChange(event: any) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent
      offset += translationY
      translateY.setOffset(offset)
      translateY.setValue(0)
      if (translationY >= 100) {
        opened = true
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }
  return (
    <View style={styledComponents.container} >
      <Header />
      <View style={styles.content}>
        <Menu translateY={translateY} />
        <PanGestureHandler onGestureEvent={animatedEvent} onHandlerStateChange={onHandleStateChange}>
          <Animated.View style={[styles.card,
          {
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              })
            }]
          }]}>
            <View style={styles.cardHeader}>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.title}>Saldo disponível</Text>
              <Text style={styles.description}>R$ 853.873,00</Text>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.anotation}>Transferencia de R$ 40,00 recebida de Cara Delevingne as 15:34</Text>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
      <Tabs />
    </View >

  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
    opacity: 20
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