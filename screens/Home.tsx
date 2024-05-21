import React, { PropsWithChildren, useCallback, useState } from "react";
import { SafeAreaView, StatusBar, ScrollView, View, Text, Button, StyleSheet, Dimensions, Pressable, Image, TextInput, KeyboardAvoidingView, Platform, Alert, Linking } from "react-native";
import global from '../style/global';
import GradientTemplate from "../style/GradientTemplate";
import { BlurView } from "expo-blur";
import LinearGradient from "react-native-linear-gradient";

const Home = ({navigation}: PropsWithChildren<any>) => {
    const [text, onChangeText] = useState('');
    const gitUrl = 'https://github.com/chazeauv';

    return (
        <GradientTemplate headerPadding={true}>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={global.sectionContainer}>
                <StatusBar barStyle="default"/>
                <View style={global.card}>
                    <View style={global.cardContent}>
                        <Image blurRadius={2} style={global.mainImg} source={ require('../assets/images/lemonWater.jpg') }/>
                        <View style={global.mainTitleContainer}>
                            <Text style={global.mainTitle}>The</Text>
                            <Text style={global.mainTitle}>Mixologist</Text>
                            <Text style={styles.mainDesc}>Comment concocter le meilleur cocktail.</Text>
                        </View>
                        <View style={styles.buttons}>
                            <LinearGradient 
                                colors={['#ffda0a', '#ffe747']}
                                style={global.button}
                                >
                                <Text style={global.text} onPress={() => navigation.navigate("COCKTAILS")}>VOIR LES COCKTAILS</Text>
                            </LinearGradient>
                            <OpenURLButton url={gitUrl}/>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </GradientTemplate>
    );
};

const OpenURLButton = ({url}: OpenURLButtonProps) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    
    if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
    } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
    }
    }, [url]);

    return (
        <LinearGradient 
        colors={['#CFDEF3', '#E0EAFC']}
        style={global.button}
        >
            <Text style={[global.text, styles.gitTxt]} onPress={handlePress}>REPO GITHUB</Text>
        </LinearGradient>
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
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    gitBtn: {
        backgroundColor: 'white',
    },
    gitTxt: {
        color: '#9796f0',
    }
});

export default Home;