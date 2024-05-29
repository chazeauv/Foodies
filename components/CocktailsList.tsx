/* eslint-disable prettier/prettier */
import { Dimensions, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import global from '../style/global';
import ListElt from './ListElt';
import React, { useEffect, useState } from 'react';
import { fetchCocktails, Cocktail } from '../services/CocktailsDB';

const CocktailsList = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCocktails = async () => {
      try {
        const fetchedCocktails = await fetchCocktails();
        setCocktails(fetchedCocktails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCocktails();
  }, []);

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

  return (
    <View style={[global.card, styles.card]}>
      <View style={[global.cardContent, styles.cardContent]}>
        <ScrollView style={styles.scrollView} stickyHeaderIndices={[0]}>
          <View style={styles.listDescContainer}>
            <Text style={styles.listDesc}>Résultats</Text>
          </View>
          {cocktails.map((cocktail) => (
            <ListElt key={cocktail.idDrink} cktName={cocktail.strDrink} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    flex: 1
  },
  card: {
    width: Dimensions.get('window').width - 16,
    paddingTop: 10,
    backgroundColor: 'white',
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
});

export default CocktailsList;
