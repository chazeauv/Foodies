import React, { PropsWithChildren } from "react";
import { SafeAreaView, StatusBar, ScrollView, View, Text, Button, StyleSheet, Dimensions, Pressable } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';
import global from '../style/global';

const Home = ({navigation}: PropsWithChildren<any>) => {
    return (
        <ScreenTemplate headerPadding={true}>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />
                <View style={global.sectionContainer}>
                    <View style={global.card}>
                        <Text style={global.sectionTitle}>HELLO !</Text>
                        <Pressable style={global.button} onPress={() => navigation.navigate("Recettes")}>
                            <Text style={global.text}>Cocktails</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ScreenTemplate>
    );
};

const ScreenTemplate = ({ children, headerPadding }: { children: React.ReactNode, headerPadding: boolean }) => {
    //useHeaderHeight is a hook that gives you the height of the header
    const headerHeight = useHeaderHeight();
    
    return (
    <LinearGradient 
    colors={['#f5f7fa', '#c3cfe2']}
    style={{ flex: 1, paddingTop: headerPadding ? headerHeight : 0 }}
    >
        {children}
    </LinearGradient>
    )
}

export default Home;