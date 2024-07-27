import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import ListRenderer from "./ListRendererValues";

export default function PendingPayment(){
    const navigation = useNavigation();

    function handleOpenEdit(id: string) {
        navigation.navigate('AddAmountsOwed', { id })
    }

    const [arrDevidos, setArrDevidos] = useState([
        { id: '1', nome: 'John Doe', devido: 100, pago: 50 },
        { id: '2', nome: 'Jane Doe', devido: 200, pago: 0 },
        // ...
    ]);


    {
        return (
            <ListRenderer arrDevidos={arrDevidos} />
        )
    }
}
