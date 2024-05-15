import { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, View, Text, Dimensions, StyleSheet, Button, StatusBar } from "react-native";


const Recettes = ({navigation}: PropsWithChildren<any>) => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <View
                
                style={styles.sectionContainer}>
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>WORK IN PROGRESS...</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 350,
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
        padding: 16,
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Recettes;