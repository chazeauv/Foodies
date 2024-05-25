import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import global from '../style/global';
import ListElt from './ListElt';

const CocktailsList = ({cktName}: {cktName: string}) => {

    return (
        <View style={[global.card, styles.card]}>
            <View style={global.cardContent}>
                <ScrollView style={styles.scrollView} stickyHeaderIndices={[0]}>
                    <View style={styles.listDescContainer}>
                        <Text style={styles.listDesc}>Résultats</Text>
                    </View>
                    <ListElt cktName={cktName.toString()}/>
                    <ListElt cktName={cktName.toString()}/>
                    <ListElt cktName={cktName.toString()}/>
                    <ListElt cktName={cktName.toString()}/>
                    <ListElt cktName={cktName.toString()}/>
                    <ListElt cktName={cktName.toString()}/>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get("window").width - 16,
        paddingTop: 10,
        backgroundColor: 'white'
    },
    scrollView: {
        width: '100%',
    },
    listDescContainer: {
        paddingBottom: 6,
        marginBottom: 10,
        marginLeft: 10,
        width: '95%',
        backgroundColor: 'white',
    },
    listDesc: {
        fontSize: 18
    }
});

export default CocktailsList;