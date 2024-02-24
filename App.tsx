import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Teste from './src/Teste';
import Header from './src/components/Header';
import ListRenderer from './src/components/ListRenderer';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>hehehe</Text>
      <StatusBar style="auto" /> */}
      <Header title='Gerenciador Finanças' back={false} />
      <View style={styles.container2}>
        <ListRenderer />
        <ListRenderer />
        <ListRenderer />
      </View>
      {/* <Teste /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#2c3e50',
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
