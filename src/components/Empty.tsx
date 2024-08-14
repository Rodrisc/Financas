import { StyleSheet, Text, View } from "react-native"
import { Icon } from "react-native-elements"

export default function Empty(){
    return(
        <View style={styles.contaiter}>
            <Text>Não há nada por aqui</Text>
            <Icon
                name="inbox"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contaiter:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // width:'100%',
        height:'100%',
        backgroundColor: 'red'
    }
})
