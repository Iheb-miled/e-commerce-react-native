import { StyleSheet } from "react-native";
import ProductCard from "../components/Home/ProductCard";
import { height, width } from "./WidthHeight";

export const styles = StyleSheet.create({
    container: {
        width: width,
        padding: 10,
        marginVertical: 10,
        // height:height/2
    },
    text: {
        fontSize: 25,
        color: "#333",
        textAlign: "center"
    },
    ProductCard: {
        width: width * 1 - 10,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    
    }
})