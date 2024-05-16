import React, { PropsWithChildren } from "react";
import { SafeAreaView, StatusBar, ScrollView, View, Text, Button, StyleSheet, Dimensions, Pressable } from "react-native";
import global from '../style/global';
import GradientTemplate from "../style/GradientTemplate";
import { BlurView } from "expo-blur";

const Home = ({navigation}: PropsWithChildren<any>) => {
    return (
        <GradientTemplate headerPadding={true}>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />
                <View style={global.sectionContainer}>
                    {/* <BlurView intensity={90}> */}
                        <View style={global.card}>
                            <Text style={global.sectionTitle}>Bienvenue sur </Text>
                            <Text style={global.sectionTitle}>COCKTAILS RECEP' </Text>
                            <Pressable style={global.button} onPress={() => navigation.navigate("COCKTAILS")}>
                                <Text style={global.text}>Cocktails</Text>
                            </Pressable>
                        </View>
                    {/* </BlurView> */}
                </View>
            </SafeAreaView>
        </GradientTemplate>
    );
};

export default Home;