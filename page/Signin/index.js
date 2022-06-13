import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


export default function Signin() {


    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigation = useNavigation();


    return (




        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHearder}>
                <Text style={styles.message}>  SEJA BEM - VINDO (A)   </Text>
            </Animatable.View>

            <View style={styles.foto} >
                <View style={styles.fotologo} >
                    <Animatable.Image
                        animation="flipInY"
                        source={require('../Signin/logo.png')}
                        style={{ width: '100%' }}
                        resizeMode="center"

                    />

                </View>

            </View>

            <Animatable.View animation="fadeInLeft" style={styles.containerForm}>
                <Text style={styles.title}> E-mail </Text>
                <TextInput
                    value={email}
                    onChangeText={email => setEmail(email)}
                    placeholder="Digite seu e-mail..."
                    style={styles.input}

                />
                <Text style={styles.title} > Senha </Text>
                <TextInput
                    value={senha}
                    onChangeText={senha => setEmail(senha)}
                    secureTextEntry={true}
                    placeholder="Digite sua senha..."
                    style={styles.input}

                />

                <TouchableOpacity style={styles.button} >
                    <Text 
                   
                    style={styles.buttontext} 
                 onPress={() => navigation.navigate('Home')} > ACESSAR </Text>

                </TouchableOpacity>

                

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Cadastro')} >
                    <Text style={styles.registerText} > Não possui conta? CADASTRE-SE </Text>

                </TouchableOpacity >


                <TouchableOpacity
                    style={styles.exitGo}
                    onPress={() => navigation.navigate('Welcome')} >
                    <Text style={styles.exit} > VOLTAR  </Text>


                </TouchableOpacity>

            </Animatable.View>


        </View>


    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'

    },
    containerHearder: {

        marginTop: '20%',
        marginBottom: '16%',
        paddingStart: '5%',
        color: '#FFF',



    },
    containerForm: {
        flex: '1',
        marginTop: '16%', // espaçamento
        backgroundColor: '#FFF', // cor branca
        borderTopLeftRadius: '25', // borda redonda
        borderTopRightRadius: '25', // borda redonda lado esquerdo
        paddingStart: '5%', // espaçamento margem lado direito
        paddingEnd: '5%', // espaçamento lado esquerdo
        marginBottom: 50, // desgrudar item de baixo

    },
    message: {
        fontSize: 24, // tamanho fonte
        color: '#FFF', // cor branca
        fontWeight: 'bold', // negrito 
    },
    title: {

        fontSize: 20, // tamanho fonte
        marginTop: 25 // desgrudar de cima

    },
    input: {
        borderBottomWidth: 1, // largura borda digitar
        height: 50, //altura
        marginBottom: 14, // desgrudar item de baixo
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

    registerText: {


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

    fotologo: {
        flex: 1,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: "center",



    },














})
