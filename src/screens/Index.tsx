import { bgColor, bgColorButton } from '../../colors';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View, TouchableOpacityProps } from 'react-native';

import Header from '../components/Header';
import ListRenderer from '../components/ListRenderer';
import { useNavigation } from '@react-navigation/native';

import DatabaseInit from '../banco/database-init';
import ButtonAdd from '../components/ButtonAdd';

export default function Index() {

    const db = new DatabaseInit();

    const navigation = useNavigation();

    var arrDevidos = []


    function handleOpenEdit(id: string) {
        navigation.navigate('AddAmountsOwed', { id })
    }


    return (
        <View style={styles.container}>
            {/* <Header title='Gerenciador Finanças' back={false} /> */}

            <FlatList
                contentContainerStyle={{ paddingBottom: 100 }}
                data={arrDevidos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ListRenderer user={item.nome} devido={item.devido} pago={item.pago} onPress={() => handleOpenEdit(item.id)} />}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={<Text>Tem nada não</Text>}
            />
            <ButtonAdd onPress={() => handleOpenEdit('1')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: bgColor,
        height: '100%',
    }
});
