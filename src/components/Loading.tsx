import { ActivityIndicator, View } from "react-native";
import styles from "./styles/Loading";
import {background_header} from '../../colors'

const Loading = () =>{
    return(
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={background_header} />
        </View>
    )
}

export default Loading
