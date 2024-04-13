import { bgColor } from '../../colors';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View, TouchableOpacityProps } from 'react-native';

import Header from '../components/Header';
import ListRenderer from '../components/ListRenderer';
import { useNavigation } from '@react-navigation/native';

import DatabaseInit from '../banco/database-init';

export default function Index() {

    const db = new DatabaseInit();

  const navigation = useNavigation();

  var arrDevidos = [

    {
      'id': '1',
      'nome': 'Rodrigo',
      'devido': 1000,
      'pago': 1000,
      'restante': '0'
    },{
      'id': '2',
      'nome': 'Judson',
      'devido': 1000,
      'pago': 1000,
      'restante': '0'
    }
  ]


  function handleOpenEdit(id: string) {
    navigation.navigate('AddAmountsOwed', { id })
  }


  return (
    <View style={styles.container}>
      <Header title='Gerenciador Finanças' back={false} />

        <FlatList 
          data={arrDevidos}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ListRenderer user={item.nome} devido={item.devido} pago={item.pago} onPress={() => handleOpenEdit(item.id)}/>}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text>Tem nada não</Text>}
        />
      {/* <TouchableOpacity onPress={handleOpenEdit(id)} ><Text>Aperte aqui</Text></TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    height: '100%',

  }
});
