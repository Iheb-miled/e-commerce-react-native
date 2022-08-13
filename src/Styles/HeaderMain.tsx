import { StyleSheet } from "react-native";
import { width } from "./WidthHeight";

export const styles = StyleSheet.create({
    headerMain: {
        width: width,
        height: width / 4 - 30,
        backgroundColor: "#fff",
        elevation: 15, // hethi variable mta3 dhadow eli ta7et el header
        paddingVertical: 10, // hethi ta 3mel el padding vertical thabbet el item chwaya (icon searchBar)
        paddingHorizontal: 10, // hethi ta3mel el padding horizontal gauche droite el item  (icon serachBar )
    },
    headerFlex: {
        flexDirection: "row",
        alignItems: 'center'
    },
    searchBox: {
        width: "80%",
        height: width / 7 - 15,
        backgroundColor: "#e5e5e5",
        marginHorizontal: 10,
        borderRadius: 15,
        fontSize: 15, // size mta3 el placeholder wel text
        paddingHorizontal: 10, // hethi tba3ed el placeholder 3ala jneb 
        position: "relative"

    },
    searchIcon: {
        position: "absolute",
        bottom: -15,
        right: 15
    }
})