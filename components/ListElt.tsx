import { Animated, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import global from '../style/global';
import { useEffect, useRef, useState } from 'react';
import EltDetails from './EltDetails';
import { Cocktail, Ingredient } from '../services/CocktailsDB';

interface ListEltProps {
    elt: Cocktail;
    type: string;
}

const ListElt = ({listEltProps}: {listEltProps: ListEltProps}) => {
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

    const cocktail = listEltProps.elt as Cocktail;
    const thumbUrl = cocktail.strDrinkThumb ? cocktail.strDrinkThumb : '../assets/DNF.jpg';
    console.log("thumbUrl: " + thumbUrl);

    return (
        <View style={[global.card, styles.card]}>
            <View style={[global.cardContent, styles.cardContent]}>
                <Image style={styles.img} source={{uri: thumbUrl}}/>
                <View style={styles.desc}>
                    <Text style={styles.descText}>{cocktail.strDrink}</Text>
                    <TouchableOpacity style={[global.button, styles.dtBtn]} onPress={() => {showDetails(inDetails = !inDetails)}}>
                        <Text style={[global.text, styles.dtText]}>DETAILS</Text>
                    </TouchableOpacity>
                </View>
                {
                    inDetails &&
                    <Animated.View style={{opacity: fadeAnim, paddingBottom: 10, paddingHorizontal: 10}}>
                        <EltDetails elt={cocktail}/>
                    </Animated.View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 'auto',
        height: 'auto',
        borderWidth: 1,
        borderColor: '#cccccc',
        marginBottom: 16,
        marginHorizontal: 10,
        flex: 1,
    },
    cardContent : {
        padding: 0,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 16,
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#cccccc'
    },
    desc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        marginBottom: 16,
        marginLeft: 16,
    },
    dtBtn: {
        backgroundColor: 'orange',
        flex : 1,
        marginRight: 16,
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