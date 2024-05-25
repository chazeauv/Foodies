import React, { PropsWithChildren, useCallback } from "react";
import { StatusBar, View, Text, StyleSheet, Dimensions, Image, KeyboardAvoidingView, Platform, Alert, Linking } from "react-native";
import global from '../style/global';

const Home = ({navigation}: PropsWithChildren<any>) => {
    const gitUrl = 'https://github.com/';

    return (
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={global.sectionContainer}>
                <StatusBar barStyle="light-content"/>
                <View style={global.card}>
                    <View style={global.cardContent}>
                        <View style={global.mainTitleContainer}>
                            <Text style={global.mainTitle}>THE</Text>
                            <Text style={global.mainTitle}>MIXOLOGIST</Text>
                            <Text style={styles.mainDesc}>Trouves un cocktail. Concocte-le.</Text>
                        </View>
                        <View style={styles.buttons}>
                            <View style={[global.button, styles.ctBtn]}>
                                <Text style={[global.text, styles.ctTxt]} onPress={() => navigation.navigate("COCKTAILS")}>VOIR LES COCKTAILS</Text>
                            </View>
                            <OpenURLButton url={gitUrl}/>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
    );
};

const OpenURLButton = ({url}: OpenURLButtonProps) => {
    const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    
    if (supported) {
        await Linking.openURL(url);
    } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
    }
    }, [url]);

    return (
        <View style={[global.button, styles.gitBtn]}>
            <Image style={styles.gitImg} source={ require('../assets/images/gitLogo.png') }/>
        </View>
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
        color: '#cccccc',
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
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 50,
        tintColor: '#7F00FF',
        height: 48,
        width: 48,
    }
});

export default Home;