import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles/header";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { textColor } from "../../colors";

interface HeaderProps {
    title: string;
    back: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, back }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.espacamento} />
            <View style={styles.containerText}>
                <View style={styles.TouchableOpacity}>
                    {back ? 
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{height: 40, width: 40, justifyContent: 'center'}} >
                        <AntDesign name="left" size={24} style={{color: textColor}} />
                    </TouchableOpacity> 
                    :
                    ''}
                </View>
                <Text style={styles.text}>{title}</Text>
                <View style={styles.TouchableOpacity} />

            </View>
        </View>
    )
}

export default Header;