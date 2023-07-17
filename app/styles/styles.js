import { StyleSheet } from "react-native";

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
        marginTop: 80
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
        
    }
});
