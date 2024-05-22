import { Dimensions, StyleSheet, View } from 'react-native';
import global from '../style/global';

const CocktailsList = ({cktName}: {cktName: string}) => {

    return (
        <View style={[global.card, styles.card]}>
            <View style={global.cardContent}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: Dimensions.get("window").width - 16,
    }
});

export default CocktailsList;