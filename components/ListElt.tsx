/* eslint-disable prettier/prettier */
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import global from '../style/global';
import { useState } from 'react';
import EltDetails from './EltDetails';

const ListElt = ({cktName}: {cktName: string}) => {
    let [inDetails, showDetails] = useState(false);

    return (
        <View style={[global.card, styles.card]}>
            <View style={[global.cardContent, styles.cardContent]}>
                <Image style={styles.img} source={ require('../assets/images/cocktailsBg.jpg') }/>
                <View style={styles.desc}>
                    <Text style={styles.descText}>{cktName}</Text>
                    <TouchableOpacity style={[global.button, styles.dtBtn]} onPress={() => {showDetails(!inDetails)}}>
                        <Text style={[global.text, styles.dtText]}>DETAILS</Text>
                    </TouchableOpacity>
                </View>
                {inDetails && <EltDetails/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 'auto',
        flex: 1,
        height: 'auto',
        borderWidth: 1,
        borderColor: '#cccccc',
        marginBottom: 16,
        marginHorizontal: 10
    },
    cardContent : {
        padding: 16,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 16,
    },
    img: {
        width: '100%',
        height: 128,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#cccccc'
    },
    desc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16
    },
    dtBtn: {
        backgroundColor: 'orange',
        flex : 1,
    },
    dtText: {
        fontSize: 14,
    },
    descText: {
        fontSize: 18,
        fontWeight: 'medium',
        color: 'black',
        flex: 2
    }
});

export default ListElt;