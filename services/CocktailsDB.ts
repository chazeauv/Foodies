/* eslint-disable prettier/prettier */
// Assurez-vous d'importer React si vous utilisez des fonctionnalités de React.


// Déclarez et exportez l'interface Cocktail
export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strTags?: string;
  strVideo?: string;
  strIBA?: string;
  strGlass?: string;
  strInstructions?: string;
  strDrinkThumb?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
}

// Exportez la fonction fetchCocktails
export const fetchCocktails = async (searchTerm: string): Promise<Cocktail[]> => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm}`);
    const json = await response.json();
    return json.drinks || [];
  } catch (error) {
    throw new Error('Failed to fetch cocktails');
  }
};
