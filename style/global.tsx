import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("window");
const height = dimensions.height;
const width = dimensions.width;

export default StyleSheet.create({
    mainTitleContainer: {
        position: 'absolute',
        top: 300,
        justifyContent: 'center',
        width: Dimensions.get("window").width - 16,
    },
    mainTitle: {
        fontFamily: 'Reddit Mono',
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
    },
    sectionContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    sectionTitle: {
        fontSize: 51,
        fontWeight: '600',
        color: 'white',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'white',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    card: {
        borderRadius: 20,
        color: 'white',
        width: width,
        height: height
    },
    cardContent: {
        borderRadius: 20,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 32,
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.25,
        color: 'white',
    },
    input: {
        width: width - 16,
        margin: 12,
        borderWidth: 0,
        backgroundColor: 'white',
        color: 'black',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 32,
    },
    mainImg: {
        position: 'absolute',
        top: -100,
        height: height + 100,
        resizeMode: 'contain',
        opacity: 0.5,
    },
});