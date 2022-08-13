import { StyleSheet } from "react-native";
import { width } from "./WidthHeight";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e5e5e5",
        zIndex: 3,
    },
    swiper: {
        width: width,
        marginTop: '5%',
        alignItems: 'center',
    },
    banner: {
        height: width /2.2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    }
})