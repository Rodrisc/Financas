import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "../screens/Index";
import AddAmountsOwed from "../screens/AddAmountsOwed";

const {Navigator, Screen} = createNativeStackNavigator();

export default function Routes () {
    return(
     <NavigationContainer >
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Index} />
            <Screen name="AddAmountsOwed" component={AddAmountsOwed}/>
        </Navigator>
     </NavigationContainer>   
    )
}

