/* eslint-disable prettier/prettier */
import React, { PropsWithChildren, useState } from "react";
import { View, Text, StyleSheet, StatusBar, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import global from '../style/global';
import CocktailsList from "./CocktailsList";

const Cocktails = ({ }: PropsWithChildren<any>) => {
  const [text, onChangeText] = useState('');
  const [inSearch, goInSearch] = useState(false);

  const handleSearch = () => {
    if (text.trim()) {
      goInSearch(true);
    } else {
      // Reset the search state if text is empty
      goInSearch(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} style={global.sectionContainer}>
      <StatusBar barStyle="light-content" />
      <View style={global.card}>
        <View style={global.cardContent}>
          {!inSearch && (
            <View style={global.mainTitleContainer}>
              <Text style={global.mainTitle}>THE</Text>
              <Text style={global.mainTitle}>MIXOLOGIST</Text>
            </View>
          )}
          <TextInput
            style={[global.text, global.input, styles.input]}
            onChangeText={onChangeText}
            autoFocus={true}
            onSubmitEditing={handleSearch}
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
