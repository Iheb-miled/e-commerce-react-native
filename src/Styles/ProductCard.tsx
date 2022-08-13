import { StyleSheet } from "react-native";
import { width } from "./WidthHeight";
export const styles = StyleSheet.create({

    ProductCard: {
        width: width / 2 - 30,
        height: width / 1.8,
        borderRadius: 10,
        elevation: 8,
        backgroundColor: "#e5e5e5",
        flexWrap: "wrap",
        margin: 10,
        // justifyContent: "center",
    },
    image: {
        width: "100%",
        height: width / 2 - 60,
        resizeMode: "cover",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    productName: {
        color: "#333",
        paddingVertical: 5,
        textAlign: "center"
    },
    PriceView: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    PriceText: {
        color: "#333",
        paddingHorizontal: 10,
        fontSize: 15
    },
    offerPriceText: {
        color: "#333",
        fontSize: 12,
        textDecorationLine: "line-through",
        marginLeft: -5,
        marginTop: -5
    },
    IconView: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    IconStylesNotClicked: {
        marginRight: 10,
        color: "#333"
    },
    IconStylesClicked:{
        marginRight: 10,
        color: "crimson"
    }, 
    outOfStock:{
        width:50,
        height:50,
        backgroundColor:"red",
        borderRadius:50,
        position:"absolute",
        top:-10,
        left:-10,
        justifyContent:"center",
        alignItems:"center"
    },
    limitStock:{
        color:"#fff",
        fontSize:11,
        textAlign:"center",
        fontWeight:"bold"
    }


});