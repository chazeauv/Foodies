import React, { PropsWithChildren } from "react";
import { StatusBar, View, Text, StyleSheet, Dimensions, Image, KeyboardAvoidingView, Platform, Alert, Linking, TouchableOpacity } from "react-native";
import global from '../style/global';

const Home = ({navigation}: PropsWithChildren<any>) => {
    const gitUrl = 'https://github.com/chazeauv/Foodies';

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
                            <TouchableOpacity style={[global.button, styles.ctBtn]} onPress={() => navigation.navigate("COCKTAILS")}>
                                <Text style={[global.text, styles.ctTxt]}>VOIR LES COCKTAILS</Text>
                            </TouchableOpacity>
                            <OpenURLButton url={gitUrl}/>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
    );
};

const OpenURLButton = ({url}: OpenURLButtonProps) => {
    const handlePress = async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            Linking.openURL(url);
        } else {
            Alert.alert('Impossible d\'ouvrir le lien');
        }
    };

    return (
        <TouchableOpacity style={[global.button, styles.gitBtn]} onPress={handlePress}>
            <Image style={styles.gitImg} source={ require('../assets/images/gitLogo.png') }/>
        </TouchableOpacity>
    );
};

type OpenURLButtonProps = {
    url: string;
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
        bottom: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width - 16,
    },
    ctBtn: {
        backgroundColor: 'white',
        flex: 10,
    },
    ctBtnDark: {
        backgroundColor: '#ddd',
        flex: 10,
    },
    ctTxt: {
        color: 'black',
    },
    gitBtn: {
        flex: 1,
        elevation: 0,
    },
    gitImg: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 50,
        tintColor: '#7F00FF',
        height: 48,
        width: 48,
    }
});

export default Home;
