import { Alert, StyleSheet, TouchableOpacity, Text } from "react-native"
import styles from "./styles/buttonAdd"

interface ButtonAddProps {
    onPress: () => void
}

const ButtonAdd: React.FC<ButtonAddProps> = ({onPress}) => {
    return(
        <TouchableOpacity style={styles.floatingButton} onPress={() => onPress()}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    )
}

export default ButtonAdd
