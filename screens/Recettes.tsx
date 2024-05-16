import { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, View, Text, Dimensions, StyleSheet, Button, StatusBar } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useHeaderHeight } from '@react-navigation/elements';
import global from '../style/global';

const Recettes = ({navigation}: PropsWithChildren<any>) => {
    return (
        <ScreenTemplate headerPadding={true}>
            <SafeAreaView>
                <StatusBar barStyle="dark-content" />
                <View
                    
                    style={global.sectionContainer}>
                    <View style={global.card}>
                        <Text style={global.sectionTitle}>WORK IN PROGRESS...</Text>
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

export default Recettes;