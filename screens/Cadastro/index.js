import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function Cadastro () {





    const navigation = useNavigation();
return (
  
    
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHearder}>
                <Text style={styles.message}>  CADASTRO  </Text>
                </Animatable.View> 


             <Animatable.View animation="fadeInLeft" style={styles.containerForm}>
             <Text style={styles.title}>Digite seu -E-mail </Text>
                <TextInput
                    placeholder="Digite seu E-mail  ..."
                    style={styles.input}
                

                   />
                
                <Animatable.View animation="fadeInLeft" style={styles.nome}>
                <Text style={styles.title}>Nome Completo </Text>

                <TextInput
                    placeholder="Digite seu nome ..."
                    style={styles.input}

                />
        
                <Animatable.View animation="fadeInLeft" style={styles.senha}>
                <Text style={styles.title}>Crie uma senha </Text>
                <TextInput
                    placeholder="Minimo 6 caracteres ..."
                    style={styles.input}

                />
        


                <TouchableOpacity style={styles.button} 
                     
                     onPress={() =>  navigation.navigate('Registration')} >
                     <Text style={styles.tittle} > CRIAR CONTA  </Text>
                     
                </TouchableOpacity>

                

                <TouchableOpacity
                    style={styles.exitGo}
                    onPress={() => navigation.navigate('Signin')} >
                    <Text style={styles.tittle} > VOLTAR  </Text>


                </TouchableOpacity>

             </Animatable.View>
          </Animatable.View> 
        </Animatable.View> 
   </View>
)}
;
    
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#FFF'

    },

    

    containerHearder: {

        marginTop: '20%',
        marginBottom: '16%',
        paddingStart: '5%',
        color: '#FFF',



    },
    containerForm: {
        flex: '1',
        marginTop: '12%', // espaçamento
        backgroundColor: '#FFF', // cor branca
        borderTopLeftRadius: '25', // borda redonda
        borderTopRightRadius: '25', // borda redonda lado esquerdo
        paddingStart: '5%', // espaçamento margem lado direito
        paddingEnd: '5%', // espaçamento lado esquerdo
        
    },
    message: {
        fontSize: 24, // tamanho fonte
        color: '#38a69d', // cor branca
        fontWeight: 'bold', // negrito 
    },
    title: {

        fontSize: 20, // tamanho fonte
        marginTop: -5 // desgrudar de cima
        

    },
    input: {
        borderBottomWidth: 1, // largura borda digitar
        height: 40, //altura
        marginBottom: 20, // desgrudar item de baixo
        fontSize: 16, // tamanho fonte


    },

    button: {

        backgroundColor: '#38a69d',
        width: '100%', //tamanho da barra
        paddingVertical: 7, // tamanho da barra
        marginTop: 14, // desgrudar de cima
        justifyContent: 'center', // centralizar vertical
        alignItems: 'center', // centralizar horizontrel
        borderRadius: 10,


    },

    buttontext: {

        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },

    buttonRegister: {

        width: '100%', //tamanho da barra
        paddingVertical: 7, // tamanho da barra
        marginTop: -2,
        justifyContent: 'center', // centralizar vertical
        alignItems: 'center', // centralizar horizontrel


    },

    exitGo: {
        backgroundColor: '#38a69d',
        width: '50%', //tamanho da barra
        borderRadius: 10,
        paddingVertical: 10, // tamanho da barra
        marginTop: 90,
        justifyContent: 'center', // centralizar vertical
        alignItems: 'center', // centralizar horizontrel


    },

    tittle: {

        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        width: '-100%', //tamanho da barra
    },

    
    
 
    
    
      

    });
