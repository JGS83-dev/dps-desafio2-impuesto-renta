import React from 'react';
import ContenedorPrincipal from './ContenedorPrincipal';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';
import { colores } from '../config/colores';

const Resultados = ({ navigation }) => {
    return (

        <ContenedorPrincipal titulo="Resultados"
            navigation={navigation}
            contenido={(
               <>
               <View style={styles.container}>
                                <View style={styles.inputContainer}>
                                <Text style={styles.letra}>Desc. Renta:</Text>
                                    <Text style={styles.desc}>Descuento</Text>
                                </View>

                                <View style={styles.inputContainer}>
                                <Text style={styles.letra}>Desc. ISSS:</Text>
                                    <Text style={styles.desc}>Descuento</Text>
                                </View>

                                <View style={styles.inputContainer}>
                                <Text style={styles.letra}>Desc. AFP:</Text>
                                    <Text style={styles.desc}>Descuento</Text>
                             
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.letra}>Sueldo neto:</Text>
                                    <Text style={styles.desc}>Descuento</Text>
                                </View>
                            </View>
               </>
            )}></ContenedorPrincipal>

    );
}

export default Resultados

const styles = StyleSheet.create({
    letra: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#171D26',
        textAlign:'center',
    },
    desc: {
        fontSize: 20,
        color: '#F2F4F7'
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

