import { StyleSheet } from "react-native";
import { textPago, textDevido, textInfoValores, textRestante, textUser, bgColorListRenderer, borderBottomColorInfoUser } from "../../../colors";


const styles = StyleSheet.create({
    container:{
        backgroundColor: bgColorListRenderer,
        marginTop: 10,
        width: '100%',
        borderRadius: 5,
        padding: 10,
    },

    containerInfo:{
        justifyContent: 'space-between',
        flexDirection: "row"
    },

    containerInfoUser:{
        // paddingBottom: 10,
        width: '100%',
        borderBottomColor: borderBottomColorInfoUser,
        borderBottomWidth: 0.5,
        marginBottom: 10
    },

    textInfoUser:{
        fontWeight: '600',
        fontSize: 22,
        color: textUser,
        textTransform: "capitalize"
    },

    textDevido:{
        color: textDevido,
        fontWeight: '400'
    },

    textPago:{
        color: textPago,
        fontWeight: '400'
    },

    textRestante:{
        color: textRestante,
        fontWeight: '400'
    },

    textInfoValores:{
        fontWeight: '500',
        color: textInfoValores
    },

    containerStatus:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    bgStatus:{
        // backgroundColor: textDevido,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        borderRadius: 20
    },

})

export default styles