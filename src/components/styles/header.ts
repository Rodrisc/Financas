import { StyleSheet, TouchableOpacity } from "react-native";
import { background_header, textColor } from "../../../colors";

const styles = StyleSheet.create({
    container:{
        backgroundColor: background_header,
        height: '10%',
        width: '100%',
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    containerText:{
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8
    },
    text:{
        fontSize: 24,
        color: textColor,
        fontWeight: '400'
    },
    espacamento:{
        width: '100%',
        height: '50%'
    },
    TouchableOpacity:{
        width: '5%',
        height: '100%',
        justifyContent: "center"
    }
})

export default styles