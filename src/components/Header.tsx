import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles/header";
import { AntDesign } from '@expo/vector-icons';

interface HeaderProps {
    title: string;
    back: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, back }) => {
    return (
        <View style={styles.container}>
            <View style={styles.espacamento} />
            <View style={styles.containerText}>
                <View style={styles.TouchableOpacity}>
                    {back ? 
                    <TouchableOpacity >
                        <AntDesign name="left" size={24} color="black" />
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