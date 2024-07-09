import { View } from "react-native";
import Header from "../components/Header";
import { StyleSheet } from "react-native";
import { bgColor } from "../../colors";

type RouteParams = {
  id: string
}

export default function AddAmountsOwed({ id }: RouteParams){
    return(
        <View style={styles.container}>
            {/* <Header back={true} title="Adicionar Valores"/> */}
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: bgColor,
      height: '100%',
      // flex: 1,
      // flexDirection: 'column'
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    container2: {
      height: '100%',
      marginLeft: 15,
      marginRight: 15,
      // backgroundColor: '#fff',
    }
  });