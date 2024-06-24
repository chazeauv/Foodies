import { Text, View } from 'react-native';
import global from '../style/global';
import { Cocktail, Ingredient } from '../services/CocktailsDB';

const EltDetails = ({elt}: {elt: Cocktail}) =>{
        const cocktail = elt as Cocktail;
        const verre = cocktail.strGlass;
        const instructionsTab = cocktail.strInstructions?.split('.');
        const instructions = instructionsTab!.map((instruction, index) => {
            return (
                <Text key={index}>{instruction} {index != (instructionsTab!.length - 1) && "\n"}</Text>
            );
        });
        const ingredientsTab = [cocktail.strIngredient1, cocktail.strIngredient2, cocktail.strIngredient3, cocktail.strIngredient4, cocktail.strIngredient5];
        const ingredients = ingredientsTab.map((ingredient, index) => {
            return (
                <Text key={index}>{ingredient}</Text>
            );
        });
        const alcoolisee = cocktail.strAlcoholic;

        return (
            <View>
                <Text>Alcoolisé: {alcoolisee}</Text>
                <Text>Composition: {ingredients}</Text>
                <Text>Instructions: {instructions}</Text>
                <Text>Verre recommandé: {verre}</Text>
            </View>
        );
}

export default EltDetails;