import { FlatList, View, Text, PressableProps, Pressable } from "react-native"
import styles from "./styles/listRenderer"
import { textPago, textDevido, textRestante, bgColorListRenderer } from "../../colors"
import formatNumber from "../utils/FormatNumer";

interface ListRendererProps {
    user: string;
    devido: number;
    pago: number;
    onPress: () => void;
}

const ListRenderer: React.FC<ListRendererProps> = ({user, devido, pago, ...rest}) => {
    var status : number
        , restante : number = 0;
        
    const arrStatus = Array(
        'Pagamento Concluído',
        'Pagamento Pendente',
        'Pagamento Parcial'
    )
    
    const arrCores = Array(
        textPago,
        textDevido,
        textRestante
    )

    if(pago){
        if (devido - pago > 0){
            status = 2
            restante = devido - pago
        } 
        else{
            status = 0
        }
    } else {
        status = 1
        restante = devido - pago
    }

    return (
        <Pressable {...rest}>
            <View style={styles.container}>

            <View style={styles.containerInfoUser}>
                <Text style={styles.textInfoUser}>{user}</Text>
            </View>

            <View style={styles.containerInfo}>

                <View >
                    <View>
                        <Text style={styles.textInfoValores}>Total Devido: R$ <Text style={styles.textDevido}>{formatNumber(devido) }</Text></Text>
                        <Text style={styles.textInfoValores}>Total Restante: R$ <Text style={styles.textRestante}>{formatNumber(restante)}</Text></Text>
                        <Text style={styles.textInfoValores}>Total Pago: R$ <Text style={styles.textPago}>{formatNumber(pago)}</Text></Text>
                    </View>
                </View>

                <View style={styles.containerStatus}>
                    <View style={[styles.bgStatus, {backgroundColor: arrCores[status]}]}>
                        <Text style={{ color: bgColorListRenderer }}>{arrStatus[status]}</Text>
                    </View>
                </View>

            </View>

            </View>
        </Pressable>
    )

}

export default ListRenderer