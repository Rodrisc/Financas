import { FlatList, Text } from "react-native";
import ListRenderer from "./ListRendererValues";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function ClearedPayment() {

    const navigation = useNavigation();

    function handleOpenEdit(id: string) {
        navigation.navigate('AddAmountsOwed', { id })
    }

    const [arrDevidos, setArrDevidos] = useState([
        { id: '1', nome: 'John Doe', devido: 100, pago: 100 },
        { id: '2', nome: 'Jane Doe', devido: 200, pago: 200 },
    ]);

    return (
        <ListRenderer arrDevidos={arrDevidos} />
    )
}
