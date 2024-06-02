import { Animated, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import global from '../style/global';
import { useEffect, useRef, useState } from 'react';
import EltDetails from './EltDetails';
import { Cocktail } from '../services/CocktailsDB';

const ListElt = ({ckt}: {ckt: Cocktail}) => {
    let [inDetails, showDetails] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (inDetails) {
            Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            }).start();
        }
    }, [inDetails]);

    const thumbUrl = ckt.strDrinkThumb ? ckt.strDrinkThumb : '../assets/DNF.jpg';

    return (
        <View style={[global.card, styles.card]}>
            <View style={[global.cardContent, styles.cardContent]}>
                <Image style={styles.img} source={{uri: thumbUrl}}/>
                <View style={styles.desc}>
                    <Text style={styles.descText}>{ckt.strDrink}</Text>
                    <TouchableOpacity style={[global.button, styles.dtBtn]} onPress={() => {showDetails(inDetails = !inDetails)}}>
                        <Text style={[global.text, styles.dtText]}>DETAILS</Text>
                    </TouchableOpacity>
                </View>
                {
                    inDetails &&
                    <Animated.View style={{opacity: fadeAnim}}>
                        <EltDetails ckt={ckt}/>
                    </Animated.View>
                }
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