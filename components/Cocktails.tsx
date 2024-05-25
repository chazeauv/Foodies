import React, { PropsWithChildren, useState } from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import global from '../style/global';
import CocktailsList from "./CocktailsList";

const Cocktails = ({navigation}: PropsWithChildren<any>) => {
    const [text, onChangeText] = useState('');
    let [inSearch, goInSearch] = useState(false);

    return (
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={global.sectionContainer}>
                <StatusBar barStyle="light-content"/>
                    <View style={global.card}>
                        <View style={global.cardContent}>
                            <View style={global.mainTitleContainer}>
                            <Text style={global.mainTitle}>THE</Text>
                            <Text style={global.mainTitle}>MIXOLOGIST</Text>
                            </View>
                            <TextInput
                                style={[global.text, global.input, styles.input]}
                                onChangeText={onChangeText}
                                autoFocus={true}
                                onSubmitEditing={() => {goInSearch(inSearch = true)}}
                                value={text}
                                placeholder="Rechercher un cocktail"
                            />
                            {inSearch && <CocktailsList cktName={text.toString()}/>}
                        </View>
                    </View>
            </KeyboardAvoidingView>
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