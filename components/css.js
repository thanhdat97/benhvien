import { StyleSheet } from "react-native";
import { Dimensions, Platform } from 'react-native';
var { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container_header: {
        flexDirection: 'row',
        backgroundColor: "#3F51B5",
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    row: {
        flexDirection: 'row',
    },
    header: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight: "bold",
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: height
    },
    view_image_login: {
        alignItems: "center",
        justifyContent: "center",
        flex:1
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    column_875: {
        flexDirection: "column",
        width: "100%",
        paddingTop: 10,

    },
    text_877: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        paddingBottom: 20,
    },
    text_875: {
        width: "100%",
        paddingBottom: 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: "#dcdcdc",
        fontSize: 16,
        paddingLeft: 10,
    },
    text_87: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "right",
        width: "100%",
    },
    container_about: {
        flexDirection: 'row',
        flex: 5,
    },
    input: {
        height: 44,
        paddingHorizontal: 6,
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    tieu_de_about: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000',
        fontWeight: "bold",
    },
    image: {
        width: 140, height: 'auto',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flex: 1,
    },
    flexstart: {
        justifyContent: "flex-start",
        flex: 2,
    },
    button: {
        height: 46,
        borderRadius: 5,
        backgroundColor: '#036fa9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_button: {
        color: '#ffffff',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tieu_de_footer: {
        fontSize: 18,
        textAlign: 'center',
        margin: 2,
        color: 'white',
        fontWeight: "bold",
        flex: 1,
    },
});
module.exports = styles;

