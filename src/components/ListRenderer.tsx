import { FlatList, View, Text } from "react-native"
import styles from "./styles/listRenderer"
import { textPago, textDevido, textRestante } from "../../colors"

// interface ListRendererProps {
//     data: object
// }

const ListRenderer: React.FC = () => {

    const arrStatus = Array(
        'Pago',
        'Pendente',
        'Pago Parcial'
    )

    return(
        <View style={styles.container}>
           <View style={styles.containerInfo}>

                <View style={styles.containerInfoUser}>
                    <Text style={styles.textInfoUser}>Judson Alexander</Text>
                </View>
                
                <View>
                    <Text style={styles.textInfoValores}>Total Devido: R$ <Text style={styles.textDevido}>3.987,09</Text></Text>
                    <Text style={styles.textInfoValores}>Total Pago: R$<Text style={styles.textPago}> 1.254,20</Text></Text>
                    <Text style={styles.textInfoValores}>Restante: R$ <Text style={styles.textRestante}>1.500,00</Text></Text>
                </View>

           </View>

           <View style={styles.containerStatus}>
               <View style={styles.bgStatus}>
                    <Text style={{color: 'white'}}>Não Pago</Text>
               </View>
                {/* <Text>Não Pago</Text>
                <Text>Pago</Text> */}
           </View>
        </View>
    )

}

export default ListRenderer