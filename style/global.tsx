import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("window");
const height = dimensions.height;
const width = dimensions.width;
const frequency = 2;
const amplitude = 10;
const verticalOffset = 100;

export default StyleSheet.create({
    mainTitleContainer: {
        position: 'absolute',
        top: 160,
        justifyContent: 'center',
        width: Dimensions.get("window").width - 16,
    },
    mainTitle: {
        fontFamily: 'Reddit Mono',
        fontSize: 60,
        fontWeight: '400',
        color: 'white',
    },
    sectionContainer: {
        backgroundColor: 'rgba(0,0,0,1)',
        flex: 1,
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 0,
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
        // borderColor: 'white',
        // borderWidth: 2,
        color: 'white',
        // padding: 16,
        // shadowColor: 'black',
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.3,
        // shadowRadius: 6,
        // elevation: 1,
        width: width,
        height: height - 69,
        // overflow: 'hidden'
    },
    cardContent: {
        // padding: 16,
        // backgroundColor: 'transparent',
        color: 'white',
        borderRadius: 20,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // overflow: 'hidden'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 32,
        elevation: 3,
        width: width - 16,
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
        elevation: 3
    },
    mainImg: {
        position: 'absolute',
        top: -300,
        transform: [{ rotate: '-10deg' }, { translateX: 50 }],
        height: 600,
        resizeMode: 'contain',
    },
});