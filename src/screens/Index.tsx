import { bgColor, bgColorButton } from '../../colors';
import { Alert, Button, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import Header from '../components/Header';
import ListRenderer from '../components/UserDebtItem';
import ClearedPayment from '../components/ClearedPayment';
import { useNavigation } from '@react-navigation/native';

import DatabaseInit from '../banco/database-init';
import ButtonAdd from '../components/ButtonAdd';
import { useState } from 'react';
import PendingPayment from '../components/PendingPayment';

export default function Index() {

    const db = new DatabaseInit();

    const pendingPayment = () => (
       <PendingPayment />
    );

    const clearedPayment = () => (
        <ClearedPayment />
    );

    const [state, setState] = useState({
        index: 0,
        routes: [
          { key: 'pendingPayment', title: 'Pagamento Pendentes' },
          { key: 'clearedPayment', title: 'Pagamento Concluídos' },
        ],
    });

    return (
        <View style={styles.container}>
        {/* <Header title='Gerenciador Finanças' back={false} /> */}
        <TabView
            navigationState={state}
            renderScene={SceneMap({
              pendingPayment: pendingPayment,
              clearedPayment: clearedPayment,
            })}
            onIndexChange={index => setState({ ...state, index })}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={styles.container}
        />

        <ButtonAdd onPress={() => Alert.alert('Botão desabilitado', 'Este botão está temporariamente desabilitado')} />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: bgColor,
        height: '100%',
    }
});
