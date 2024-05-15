import React, { PropsWithChildren } from "react";
import { SafeAreaView, StatusBar, ScrollView, View, Text, Button, StyleSheet, Dimensions } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';

const Home = ({navigation}: PropsWithChildren<any>) => {
    return (
        <ScreenTemplate headerPadding={true}>
            <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <View
                
                style={styles.sectionContainer}>
                <View>
                    <Text style={styles.sectionTitle}>HELLO !</Text>
                    <Button title="Voir les recettes" onPress={() => navigation.navigate("Recettes")}/>
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
    colors={['#5A0003', '#360000', '#7A0000']}
    style={{ flex: 1, paddingTop: headerPadding ? headerHeight : 0 }}
    >
     {children}
    </LinearGradient>
    )
  }

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 400,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    flexHorizontal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexVertical: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Home;