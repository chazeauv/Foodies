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
                <StatusBar barStyle="light-content"/>
                <View style={global.card}>
                    <View style={global.cardContent}>
                        <Image blurRadius={0.5} style={global.mainImg} source={ require('../assets/images/cocktailsBg2.jpg') }/>
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
        <View
        style={[global.button, styles.gitBtn]}
        >
            {/* <Text style={[global.text, styles.gitTxt]} onPress={handlePress}></Text> */}
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