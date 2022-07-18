import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Header from './components/Header';
import styles from './styles/stylesheet';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        marginTop: 0,
      }}>
      <Header name="Doctor" />
      <View style={{marginTop: 20, padding: 20}}>
        <Text style={[styles.subText, {fontSize: 18}]}>Welcome back,</Text>
        <Text style={[styles.subText]}>Dr. John Doe</Text>
      </View>
      <View style={{marginTop: 20, padding: 20}}>
        <Text style={[styles.subText, {textAlign: 'center', fontSize: 30}]}>
          Your Patients
        </Text>
        <View
          style={{
            marginTop: 15,
            alignSelf: 'center',
            width: 300,
            height: 130,
            borderRadius: 20,
            padding: 10,
            borderWidth: 3,
            backgroundColor: '#7DB0E5',
          }}>
          <View style={styles.roundIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('./images/man.png')}
            />
          </View>
          <Text style={[styles.smallText, {textAlign: 'center'}]}>
            {' '}
            Saad Ali
          </Text>
        </View>

        <View
          style={{
            marginTop: 15,
            alignSelf: 'center',
            width: 300,
            height: 130,
            borderRadius: 20,
            padding: 10,
            borderWidth: 3,
            backgroundColor: '#7DB0E5',
          }}>
          <View style={styles.roundIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('./images/man.png')}
            />
          </View>
          <Text style={[styles.smallText, {textAlign: 'center'}]}>
            {' '}
            Fizza AB
          </Text>
        </View>
      </View>
    </View>
  );
};
export default App;
