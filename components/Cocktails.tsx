import React, { PropsWithChildren, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Dimensions, StyleSheet, Button, StatusBar, Image, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';
import global from '../style/global';
import GradientTemplate from "../style/GradientTemplate";
import CocktailsList from "./CocktailsList";

const Cocktails = ({navigation}: PropsWithChildren<any>) => {
    const [text, onChangeText] = useState('');
    let inSearch = false;

    return (
        <GradientTemplate headerPadding={true}>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={global.sectionContainer}>
                <StatusBar barStyle="light-content"/>
                    <View style={global.card}>
                        <View style={global.cardContent}>
                            <Image blurRadius={0.5} style={[global.mainImg]} source={ require('../assets/images/cocktailsBg2.jpg') }/>
                            <View style={global.mainTitleContainer}>
                            <Text style={global.mainTitle}>THE</Text>
                            <Text style={global.mainTitle}>MIXOLOGIST</Text>
                            </View>
                            <TextInput
                                style={[global.text, global.input, styles.input]}
                                onChangeText={onChangeText}
                                autoFocus={true}
                                onSubmitEditing={() => {inSearch = true; console.log(inSearch)}}
                                value={text}
                                placeholder="Rechercher un cocktail"
                            />
                            {inSearch ? <CocktailsList cktName={text.toString()}/> : null}
                        </View>
                    </View>
            </KeyboardAvoidingView>
        </GradientTemplate>
    );
};

const styles = StyleSheet.create({
    input: {
        marginTop: 256,
    },
    mainImg: {
        transform: [{ translateY: 96 }],
    }
});

export default Cocktails;