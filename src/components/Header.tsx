import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import styledComponents from './StyledComponents';
import { Feather as Icon } from '@expo/vector-icons';

const Header = () => {
    return (
        <View style={styledComponents.container}>
            <View style={styles.top}>
                <Image style={styles.logo} source={require('../assets/Nubank_Logo.png')} />
                <View style={styles.title}>Denis</View>
            </View>
            <Icon name="keyboard-arrow-down" size={20} color="#fff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 30,
        paddingHorizontal: 30
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 8
    },
    logo: {

    },

});
export default Header;