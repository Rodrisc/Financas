import { bgColor } from '../../colors';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import ListRenderer from '../components/ListRenderer';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Text>hehehe</Text>
      <StatusBar style="auto" /> */}
      <Header title='Gerenciador Finanças' back={false} />
      <View style={styles.container2}>
        <ListRenderer user={'Judson alexander'} devido={1250.00} pago={1249.25} />
        <ListRenderer user={'Jennyff Kettly'} devido={852.00} pago={0}/>
        <ListRenderer user={'Rodrigo Soares'} devido={1250} pago={1250}/>
      </View>
      {/* <Teste /> */}
    </View>
  );
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
