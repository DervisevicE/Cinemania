import { StyleSheet, Dimensions } from "react-native";
var { width, height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    headerText: {
        color: "white",
        fontSize: 24,
        fontWeight: 'bold'
    },
    subheaderText: {
        color: "white",
        fontSize: 20,
        marginBottom: 20
    },
    headerContainer: {
        marginTop: 40
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    innerContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    movieTitle: {
        color: "white",
        padding: 8,
        backgroundColor: "#6b6a66",
        textAlign: "center",
        fontSize: 16,
    },
    mainPoster: {
        width: width * 0.3,
        height: height * 0.2,
        resizeMode: "cover",
        transform: [{ translateY: -80 }],
        marginHorizontal: 20
    },
    moviePoster: {
        width: width,
        height: height * 0.4,
        resizeMode: "cover"
    },
    favoritesBtn: {
        position: 'absolute',
        top: 40,
        right: 20,
        width: 200,
        height: 40,
        backgroundColor: '#32a5fc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    castContainer: {
        marginTop: 8,
        paddingVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: "#4a4a4a"
    },
    columnWrapper: {
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 10,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        marginHorizontal: 15,
        paddingHorizontal: 16,
        marginTop:10,
        color:"white"
    }
});
