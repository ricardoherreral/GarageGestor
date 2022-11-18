import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors';

export default function PrincPag() {

    const ordenes = (order, setOrder) => useState([
        { hour: '9:30', key: 1 },
        { clientName: 'Ricardo', key: 2 },
        { carBrand: 'VW', key: 3 },
        { work: 'Servicio', key: 4 }
    ]);

    return (
        <View style={styles.background}>
            <Text style={styles.textInd1}>ORDENES</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
            </ScrollView>
            <Text style={styles.textInd}>CITAS DEL DIA</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
            </ScrollView>
            <Text style={styles.textInd}>INVENTARIO</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
                <View style={styles.infoContainer}>

                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        backgroundColor: colors.backTabs,
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 15,
    },
    infoContainer: {
        width: 100,
        backgroundColor: colors.infoContainer,
        marginRight: 15,
        borderRadius: 15
    },
    textInd: {
        color: colors.textColor,
        alignSelf: 'center',
        fontSize: 20
    },
    textInd1: {
        marginTop: 10,
        color: colors.textColor,
        alignSelf: 'center',
        fontSize: 20
    }

});