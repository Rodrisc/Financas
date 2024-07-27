import { useNavigation } from "@react-navigation/native";
import { FlatList, Text } from "react-native";
import UserDebtItem from "./UserDebtItem";

interface ListRendererProps {
    arrDevidos: {
        id: string;
        nome: string;
        devido: number;
        pago: number;
    }[];
}

export default function ListRenderer({ arrDevidos }: ListRendererProps) {

    const navigation = useNavigation();

    function handleOpenEdit(id: string) {
        navigation.navigate('AddAmountsOwed', { id })
    }

    return (
        <FlatList
            contentContainerStyle={{ paddingBottom: 100 }}
            data={arrDevidos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <UserDebtItem user={item.nome} devido={item.devido} pago={item.pago} onPress={() => handleOpenEdit(item.id)} />}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={<Text>Tem nada não</Text>}
        />
    )
}
