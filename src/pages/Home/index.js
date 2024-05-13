import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, StatusBar, TouchableOpacity } from 'react-native';


export default function Home() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/logo.png')} />
        <StatusBar style="auto"/>
        <View style={styles.div}>
          <Text style={styles.p}>Seja bem-vindo!</Text>
          <TextInput style={styles.input} placeholder='Seu Login:' />
          <TextInput secureTextEntry={true} style={styles.input} placeholder='Sua Senha:' />
          <TouchableOpacity style={styles.botao}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
    },
    p: {
      color: '#f66d24',
      fontWeight: 'bold',
      fontSize: 30,
    },
    img: {
      justifyContent: 'center',
    },
    botao: {
      width: 250,
      padding: 10,
      fontSize: 20,
      fontWeight: 'bold',
      borderRadius: 15,
      backgroundColor: '#f66d24',
      color: 'white',
      marginTop: 30,
    },
    input: {
      width: '100%',
      height: 20,
      color: '#f66d24',
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#f66d24',
      marginTop: 20,
      padding: 20,
      borderRadius: 15,
    },
    div: {
      flex: 1,
      alignItems: 'center'
    }
  });