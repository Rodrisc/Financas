import { StyleSheet } from "react-native";
import { textPago, textDevido, textInfoValores, textRestante, textUser } from "../../../colors";


const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 10,
        width: '100%',
        borderRadius: 5,
        padding: 10,
        flexDirection: "row"
    },

    containerInfo:{
    },

    containerInfoUser:{
        paddingBottom: 10,
    },

    textInfoUser:{
        fontWeight: '600',
        fontSize: 22,
        color: textUser
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
        backgroundColor: textDevido,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        borderRadius: 20
    },

})

export default styles