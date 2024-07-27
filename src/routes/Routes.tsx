import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "../screens/Index";
import AddAmountsOwed from "../screens/AddAmountsOwed";
import { background_header, textColor } from "../../colors";
import clearedPayment from "../components/ClearedPayment";

const {Navigator, Screen} = createNativeStackNavigator();

export default function Routes () {

    // Constantes para os titulo da tela
    const app = 'Gerenciador Finanças';
    const addValues = 'Adicionar Valores';

    return(
     <NavigationContainer >
        <Navigator screenOptions={{
            headerStyle:{
                backgroundColor: background_header
            },
            headerTintColor: textColor,
            // headerTitleStyle:{
            //     fontWeight: 'bold'
            // }
            headerTitleAlign: 'center' // ou 'left', left é o padrão
            
            }}>
            <Screen name="Home" component={Index} options={{title: app}} />
            <Screen name="AddAmountsOwed" component={AddAmountsOwed} options={{title: addValues}}/>
            {/* <Screen name="clearedPayment" component={clearedPayment} /> */}
        </Navigator>
     </NavigationContainer>   
    )
}

