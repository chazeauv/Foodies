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
  strAlcoholic?: string;
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

export interface Ingredient {
  idIngredient: string;
  strIngredient?: string;
  strDescription?: string;
  strType?: string;
  strAlcohol?: string;
  strABV?: string;
}

// Exportez la fonction fetchCocktails
export const fetchCocktails = async (searchTerm: string): Promise<Cocktail[]> => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    const json = await response.json();
    return json.drinks || [];
  } catch (error) {
    throw new Error('Failed to fetch cocktails');
  }
};

export const fetchRandom = async (searchTerm: string): Promise<Cocktail[]> => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
    const json = await response.json();
    return json.drinks || [];
  } catch (error) {
    throw new Error('Failed to fetch cocktails');
  }
}
