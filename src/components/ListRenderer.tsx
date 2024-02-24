import { FlatList, View, Text } from "react-native"
import styles from "./styles/listRenderer"

// interface ListRendererProps {
//     data: object
// }

const ListRenderer: React.FC = () => {

    return(
        <View style={styles.container}>
            <View>
                <Text>Nome: Rodrigo</Text>
            </View>
            <View>
                <Text>Total devido: R$ 3.987,09</Text>
            </View>
        </View>
    )

}

export default ListRenderer