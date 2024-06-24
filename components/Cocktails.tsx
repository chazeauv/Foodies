/* eslint-disable prettier/prettier */
import React, { PropsWithChildren, useRef, useState } from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import global from '../style/global';
import CocktailsList from "./CocktailsList";
import { useRoute } from "@react-navigation/native";

const Cocktails = ({ }: PropsWithChildren<any>) => {
  const [text, onChangeText] = useState('');
  const [inSearch, goInSearch] = useState(false);
  const route = useRoute();
  const { searchMode } = route.params as { searchMode: string };
  const handleSearch = (newText: string) => {
    onChangeText(newText);
    goInSearch(newText.trim() !== '');
  };
  console.log(searchMode);
  if(searchMode === "random"){
    setTimeout(() => {
        handleSearch("Idée concoctage !");
    }, 0);
    
  }

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={global.sectionContainer}>
      <StatusBar barStyle="light-content" hidden/>
      <View style={global.card}>
        <View style={global.cardContent}>
          <TextInput
            style={[global.text, global.input, styles.input]}
            onChangeText={handleSearch}
            autoFocus={searchMode === "nom"}
            value={text}
            placeholder="Rechercher un cocktail"
          />
          {inSearch && <CocktailsList cktListProps={[text,searchMode]}/>}
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
