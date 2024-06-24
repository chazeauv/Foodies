import React, { PropsWithChildren } from "react";
import { StatusBar, View, Text, StyleSheet, Dimensions, Image, KeyboardAvoidingView, Platform, Alert, Linking, TouchableOpacity } from "react-native";
import global from '../style/global';

const SearchHub = ({navigation}: PropsWithChildren<any>) => {

    return (
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={global.sectionContainer}>
                <StatusBar barStyle="light-content" hidden/>
                <View style={global.card}>
                    <View style={global.cardContent}>
                        <View style={global.mainTitleContainer}>
                            <Text style={global.mainTitle}>THE</Text>
                            <Text style={global.mainTitle}>MIXOLOGIST</Text>
                            <Text style={styles.mainDesc}>Trouves un cocktail. Concocte-le.</Text>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={[global.button, styles.ctBtn]} onPress={() => navigation.navigate("COCKTAILS", {searchMode: "nom"})}>
                                <Text style={[global.text, styles.ctTxt]}>NOM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[global.button, styles.ctBtn]} onPress={() => navigation.navigate("COCKTAILS", {searchMode: "random"})}>
                                <Text style={[global.text, styles.ctTxt]}>ALEATOIRE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    mainDesc: {
        fontFamily: 'Reddit Mono',
        marginTop: 8,
        fontSize: 18,
        fontWeight: '300',
        color: '#fff',
    },
    buttons: {
        position: 'absolute',
        bottom: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width - 16,
        gap: 8,
    },
    ctBtn: {
        backgroundColor: 'white',
        flex: 10,
    },
    ctTxt: {
        color: 'black',
    }
});

export default SearchHub;
