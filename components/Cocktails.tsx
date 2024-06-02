/* eslint-disable prettier/prettier */
import React, { PropsWithChildren, useState } from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import global from '../style/global';
import CocktailsList from "./CocktailsList";

const Cocktails = ({ }: PropsWithChildren<any>) => {
  const [text, onChangeText] = useState('');
  const [inSearch, goInSearch] = useState(false);

  const handleSearch = (newText: string) => {
    console.log("texte recu " + newText);
    console.log("-----------------");
    console.log("texte act " + text);
    onChangeText(newText);
    console.log("-----------------");
    console.log("nouveau texte affecté " + text);
    goInSearch(newText.trim() !== '');
  };

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={global.sectionContainer}>
      <StatusBar barStyle="light-content" hidden/>
      <View style={global.card}>
        <View style={global.cardContent}>
          {/* {!inSearch && (
            <View style={global.mainTitleContainer}>
              <Text style={global.mainTitle}>THE</Text>
              <Text style={global.mainTitle}>MIXOLOGIST</Text>
            </View>
          )} */}
          <TextInput
            style={[global.text, global.input, styles.input]}
            onChangeText={handleSearch}
            autoFocus={true}
            value={text}
            placeholder="Rechercher un cocktail"
          />
          {inSearch && <CocktailsList cktName={text} />}
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
