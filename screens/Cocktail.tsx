import { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, View, Text, Dimensions, StyleSheet, Button, StatusBar } from "react-native";


const Cocktails = ({navigation}: PropsWithChildren<any>) => {
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

const FlatListTest = () => {
  const [cocktails, setCocktail] = useState([]);

  useEffect(() => {
    fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(result => result.json())
      .then(data => {
        setCocktail(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.idDrink.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.strDrink} - {item.strTags}</Text>
          </View>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 400,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
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
        backgroundColor: 'white',
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Cocktails;