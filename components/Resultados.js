import React, { useState, useEffect } from 'react';
import ContenedorPrincipal from './ContenedorPrincipal';
import {
    Text,
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import { colores } from '../config/colores';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Resultados = ({ navigation }) => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [sueldo, setSueldo] = useState(0);
    const [renta, setRenta] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const CargarDatosFormulario = async () => {
            try {
                console.log("Leyendo datos...");
                const nombreStorage = await AsyncStorage.getItem('nombre');
                const apellidoStorage = await AsyncStorage.getItem('apellido');
                const sueldoStorage = await AsyncStorage.getItem('sueldo');
                const rentaStorage = await AsyncStorage.getItem('renta');

                if (nombreStorage !== null && apellidoStorage !== null && sueldoStorage !== 0) {
                    setNombre(nombreStorage);
                    setApellido(apellidoStorage);
                    setSueldo(sueldoStorage);
                    setRenta(rentaStorage);
                } else {
                    Alert.alert(
                        'Pasos requeridos',
                        'Debe completar el formulario',
                        [
                            {
                                text: 'Aceptar',
                                onPress: () => {
                                    console.log('Regresando a formulario');
                                    navigation.navigate("Formulario");
                                },
                                style: 'default',
                            },
                        ],
                    );
                }

            } catch (e) {
                console.log('Ocurrio un error:', e);
            }
        };
        CargarDatosFormulario();
    }, []);

    useEffect(() => {
        if (nombre.length > 0) {
            console.log('Data cargada');
            setIsLoading(false);
        }
    }, [nombre, apellido, sueldo, renta])

    return (

        <ContenedorPrincipal titulo="Calculo del ISR"
            navigation={navigation}
            contenido={(
                <>
                    {isLoading ? (<Text style={styles.letra}>Calculando...</Text>) :
                        (
                                <View style={styles.container}>
                                <Text style={styles.letraTitulo}>Resultado</Text>
                                    <View style={styles.inputContainer}>
                                        <Text style={styles.letra}>Nombre:</Text>
                                        <Text style={styles.desc}>{nombre}</Text>
                                    </View>

                                    <View style={styles.inputContainer}>
                                        <Text style={styles.letra}>Apellidos:</Text>
                                        <Text style={styles.desc}>{apellido}</Text>
                                    </View>

                                    <View style={styles.inputContainer}>
                                        <Text style={styles.letra}>Sueldo:</Text>
                                        <Text style={styles.desc}>${sueldo}</Text>
                                    </View>

                                    <View style={styles.inputContainer}>
                                        <Text style={styles.letra}>Desc. Renta:</Text>
                                        <Text style={styles.desc}>${renta}</Text>
                                    </View>

                                    <View style={styles.inputContainer}>
                                        <Text style={styles.letra}>Sueldo neto:</Text>
                                        <Text style={styles.desc}>${sueldo - renta}</Text>
                                    </View>
                                </View>
                        )
                    }
                </>
            )}></ContenedorPrincipal>

    );
}

export default Resultados

const styles = StyleSheet.create({
    letraTitulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: colores.letra,
        textAlign: 'center',
        padding: 5,
        marginBottom: 5,
    },
    letra: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colores.primario,
        textAlign: 'center',
    },
    desc: {
        fontSize: 20,
        color: colores.secundario,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "80%",
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        justifyContent: "space-evenly",
    },
});

