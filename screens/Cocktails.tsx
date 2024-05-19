import React, { PropsWithChildren, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Dimensions, StyleSheet, Button, StatusBar, Image, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';
import global from '../style/global';
import GradientTemplate from "../style/GradientTemplate";

const Cocktails = ({navigation}: PropsWithChildren<any>) => {
    const [text, onChangeText] = useState('');

    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : -300} style={global.sectionContainer}>
            <StatusBar barStyle="default"/>
                <View style={global.card}>
                    <View style={global.cardContent}>
                        <Image style={global.mainImg} source={ require('../assets/images/lemonWater.jpg') }/>
                        <View style={global.mainTitleContainer}>
                            <Text style={global.mainTitle}>The </Text>
                            <Text style={global.mainTitle}>Mixologist</Text>
                        </View>
                        <TextInput
                            style={[global.text, global.input, styles.input]}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Rechercher un cocktail"
                        />
                    </View>
                </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    input: {
        marginTop: 128,
    }
});

export default Cocktails;