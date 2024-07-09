import { Alert, StyleSheet, TouchableOpacity, Text } from "react-native"
import { bgColorButton } from "../../colors"

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

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        width: 60,
        height: 60,
        backgroundColor: bgColorButton,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 24,
      }
})

export default ButtonAdd
