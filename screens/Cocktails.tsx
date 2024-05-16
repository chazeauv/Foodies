import { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, View, Text, Dimensions, StyleSheet, Button, StatusBar } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';
import global from '../style/global';
import GradientTemplate from "../style/GradientTemplate";

const Cocktails = ({navigation}: PropsWithChildren<any>) => {
    return (
        <GradientTemplate headerPadding={true}>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />
                <View
                    
                    style={global.sectionContainer}>
                    <View style={global.card}>
                        <Text style={global.sectionTitle}>WORK IN PROGRESS...</Text>
                    </View>
                </View>
            </SafeAreaView>
        </GradientTemplate>
    );
};

export default Cocktails;