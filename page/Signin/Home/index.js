

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();


    return (


        <Animatable.View delay={700} animation="fadeInUp" style={style.containerForm}>
            <Text style={style.title} >      Estamos em manutençao no momento, tente novamente mais tarde.  </Text>


            <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate('Welcome')} >

                <Text style={style.buttonText} > RETORNAR </Text>

            </TouchableOpacity>


        </Animatable.View>



    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#38a69d',

    },

    containerLogo: {
        flex: 1,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: "center",



    },

    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25, //borda dobrada esquerda
        borderTopRightRadius: 25, // borda dobrada direita 
        paddingStart: '5%',
        paddingEnd: '5%',
 justifyContent: 'center',
        alignItems: "center",



    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,


    },
    text: {

        color: '#a1a1a1',
        fontSize: 15,
        bottom: '-5%',
        
    },

    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 30,
        paddingVertical: 9,
        width: '55%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',


    },
    buttonText: {

        backgroundColor: '#38a6F',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        borderRadius: 50,
        paddingVertical: 12,

    }

})

