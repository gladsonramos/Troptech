import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Registration () {
    const navigation = useNavigation();
  
  
    return (
  
    
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHearder}>
                <Text style={styles.message}>  CADASTRO  </Text>
                </Animatable.View> 


             <Animatable.View animation="fadeInLeft" style={styles.containerForm}>
             <Text style={styles.title}>Numero celular </Text>
                <TextInput
                    placeholder="Digite seu celular ..."
                    style={styles.input}
                

                   />
                
                <Animatable.View animation="fadeInLeft" style={styles.nome}>
                <Text style={styles.title}>Data de nascimento </Text>

                <TextInput
                    placeholder="*10/05/1998"
                    style={styles.input}

                />
        
                <Animatable.View animation="fadeInLeft" style={styles.senha}>
                <Text style={styles.title}> Gênero </Text>
                <TextInput
                    placeholder=" Selecionar "
                    style={styles.input}

                />
        


                <TouchableOpacity style={styles.button} 
                 onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.buttontext} > AVANÇAR </Text>

                </TouchableOpacity>

                

                <TouchableOpacity
                    style={styles.exitGo}
                    onPress={() => navigation.navigate('Cadastro')} >
                    <Text style={styles.exit} > VOLTAR  </Text>


                </TouchableOpacity>

             </Animatable.View>
          </Animatable.View> 
        </Animatable.View> 
   </View>
    )
};

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

    exit: {

        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        width: '-100%', //tamanho da barra
    },

    
    
 
    
    
      

    })
