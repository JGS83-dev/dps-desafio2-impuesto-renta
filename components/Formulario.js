import React from 'react';
import ContenedorPrincipal from './ContenedorPrincipal';
import {
    Text,
    StyleSheet,
    Dimensions,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { colores } from '../config/colores';
const screenHeight = Dimensions.get("window").height;
const cabeceraMensajeHeight = 0.07 * screenHeight;
const cabeceraMensajePadding = 0.01 * screenHeight;
const cabeceraMensajeMargin = 0.03 * screenHeight;
const Formulario = ({navigation}) => {
    return (
        
            <ContenedorPrincipal titulo="Formulario"
            navigation={navigation} 
            contenido={(
                <>
            <View style={styles.container}>
                        <Text style={styles.letraTitulo}>Complete los formularios</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.letra}>Nombre:</Text>
                            <TextInput
                                placeholder="Nombres"
                            
                                style={styles.input}
                                required
                            />
                        </View>


                        <View style={styles.inputContainer}>
                            <Text style={styles.letra}>Apellido:</Text>
                            <TextInput
                                placeholder="Apellido"
                              
                                style={styles.input}
                                required
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.letra}>Sueldo:</Text>
                            <TextInput
                                placeholder="Sueldo"
                            
                                style={styles.input}
                                required
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Ver calculo de salario</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </>
               
            )}></ContenedorPrincipal>
        
    );
}

export default Formulario

const styles = StyleSheet.create({
    letra: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colores.letra,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    containerIzquierdo: {
        justifyContent: "flex-start",
        padding: 5,
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
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    button: {
        backgroundColor: colores.fondoBarras,
        width: "100%",
        padding: 5,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: colores.letra,
        fontSize: 16,
    },
    letraTitulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: colores.letra,
    },
    letra: {
        fontSize: 16,
        color: colores.letra,
    },
    cabeceraMensaje: {
        backgroundColor: colores.fondoBarras,
        height: cabeceraMensajeHeight,
        padding: cabeceraMensajePadding,
        marginTop: cabeceraMensajeMargin,
        alignItems: "center",
        alignContent: "center",
    },
});

