import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import styledComponents from './StyledComponents';
import { Feather as Icon } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode'

const Menu = () => {
    return (
        <ScrollView style={styledComponents.container}>
            <View style={styles.code}>
                <QRCode value="https://github.com/dvespasiano" size={80} fgColor="#fff" bgColor="#8B10AE" />
            </View>
            <View style={styles.nav}>
                <View style={styles.navItem}>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <Text style={styles.text}>Me Ajuda</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <Text style={styles.text}>Perfil</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <Text style={styles.text}>Configurar cartão</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <Text style={styles.text}>Conficuração</Text>
                </View>
            </View>
            <View style={styles.signOut}>
                <TouchableOpacity onPress={() => { }} >
                    <Text style={styles.textButton}>SAIR DO APP</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: '0 30px'
    },
    code: {
        background: '#fff',
        padding: 10,
        overflow: "hidden",
        alignSelf: 'center'
    },
    nav: {
        marginTop: 30,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(255, 255 ,255, 0.8)',
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: '12px 0',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(255, 255 ,255, 0.8)',
    },
    text: {
        fontSize: 15,
        color: '#FFF',
        marginLeft: 20
    },
    signOut: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(255, 255 ,255, 0.8)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 15
    },
    textButton: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 13,
    }
});
export default Menu;