import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    sectionContainer: {
        flex: 1,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 350,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
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
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: Dimensions.get("window").width - 20,
        height: Dimensions.get("window").height - 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    }
});