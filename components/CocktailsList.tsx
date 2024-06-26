/* eslint-disable prettier/prettier */
import { Dimensions, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import global from '../style/global';
import ListElt from './ListElt';
import React, { useEffect, useState } from 'react';
import { fetchCocktails, Cocktail, fetchRandom } from '../services/CocktailsDB';

interface CocktailsListProps {
  cktListProps: string[]; 
}

interface ListEltProps {
  elt: Cocktail;
  type: string;
}

const CocktailsList = ( { cktListProps }: CocktailsListProps ) => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [random, setRandom] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!cktListProps[0].trim()) {
            setLoading(false);
            return;
        }

        const loadElts = async () => {
            try {
                if(cktListProps[1] === "nom") {
                  const fetchedCocktails = await fetchCocktails(cktListProps[0]);
                  setCocktails(fetchedCocktails);
                } else {
                  const fetchedRandom = await fetchRandom(cktListProps[0]);
                  setRandom(fetchedRandom);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadElts();
    }, [cktListProps[0]]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Erreur : {error}</Text>
            </View>
        );
    }

    if (cktListProps[1] === "nom" && cocktails.length === 0) {
        return (
            <View style={styles.noResultsContainer}>
                <Text style={styles.noResultsText}>Aucun résultat trouvé</Text>
            </View>
        );
    }

    if (cktListProps[1] === 'ing' && random.length === 0) {
      return (
        <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>Aucun résultat trouvé</Text>
        </View>
      );
    }

    let listEltProps: ListEltProps;

      return (
        <View style={[global.card, styles.card, styles.cardContent]}>
        {cktListProps[1] === "nom" && 
            <View style={[global.cardContent, styles.cardContent]}>
                <ScrollView style={styles.scrollView} stickyHeaderIndices={[0]}>
                    <View style={styles.listDescContainer}>
                        <Text style={styles.listDesc}>Résultats</Text>
                    </View>
                    {cocktails.map((cocktail) => (
                      listEltProps = {elt: cocktail, type: cktListProps[1]},
                        <ListElt key={cocktail.idDrink} listEltProps={listEltProps} />
                    ))}
                </ScrollView>
            </View>}
        {cktListProps[1] === "random" &&
            <View style={[global.cardContent, styles.cardContent]}>
              <ScrollView style={styles.scrollView} stickyHeaderIndices={[0]}>
                    <View style={styles.listDescContainer}>
                        <Text style={styles.listDesc}></Text>
                    </View>
                    {random.map((cocktail) => (
                        listEltProps = {elt: cocktail, type: cktListProps[1]},
                        <ListElt key={cocktail.idDrink} listEltProps={listEltProps} />
                    ))}
              </ScrollView>
            </View>}
        </View>
      );
};

const styles = StyleSheet.create({
  cardContent: {
        flex: 1,
        backgroundColor: 'white',
   },
  card: {
    width: Dimensions.get('window').width - 16,
    paddingTop: 10,
    flex: 1,
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
    fontSize: 18,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 16,
    color: 'gray',
  }
});

export default CocktailsList;
