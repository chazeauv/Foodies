import { Text, View } from 'react-native';
import global from '../style/global';
import { Cocktail } from '../services/CocktailsDB';

const EltDetails = ({ckt}: {ckt: Cocktail}) =>{

    const verre = ckt.strGlass;
    const instructionsTab = ckt.strInstructions?.split('.');
    const instructions = instructionsTab!.map((instruction, index) => {
        return (
            <Text key={index}>{instruction} {index != (instructionsTab!.length - 1) && "\n"}</Text>
        );
    });
    const ingredientsTab = [ckt.strIngredient1, ckt.strIngredient2, ckt.strIngredient3, ckt.strIngredient4, ckt.strIngredient5];
    const ingredients = ingredientsTab.map((ingredient, index) => {
        return (
            <Text key={index}>{ingredient}</Text>
        );
    });

    return (
        <View>
            <Text>Alcoolisé: I/O</Text>
            <Text>Composition: {ingredients}</Text>
            <Text>Instructions: {instructions}</Text>
            <Text>Verre recommandé: {verre}</Text>
        </View>
    );
}

export default EltDetails;