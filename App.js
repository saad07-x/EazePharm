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
import {COLORS} from './styles/colors';
import styles from './styles/stylesheet';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        marginTop: 0,
      }}>
      <Header name="Patient" />
      <View style={{marginTop: 20, padding: 20}}>
        <Text style={[styles.subText]}>Patient: Saad Ali</Text>
      </View>
      <View style={{marginTop: 20, padding: 20}}>
        <Text style={[styles.subText, {textAlign: 'center', fontSize: 30}]}>
          Add Medication
        </Text>
        <View
          style={{
            marginTop: 15,
            alignSelf: 'center',
            width: 300,
            height: 430,
            borderRadius: 20,
            padding: 10,
            borderWidth: 3,
            backgroundColor: 'white',
          }}>
          {/* <Text>Middle Name</Text> */}
          <View style={styles.inputView}>
            <TextInput
              placeholder="Name of Medicine"
              keyboardType="numeric"
              placeholderTextColor="#BDBDBD"
              onChangeText={Price => setPrice(Price)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              placeholder="Number of doses"
              keyboardType="numeric"
              placeholderTextColor="#BDBDBD"
              onChangeText={Price => setPrice(Price)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              placeholder="Time"
              keyboardType="numeric"
              placeholderTextColor="#BDBDBD"
              onChangeText={Price => setPrice(Price)}
            />
          </View>
          {/* <View style={styles.roundIcon}>
            <Image
              style={styles.tinyLogo}
              source={require('./images/man.png')}
            />
          </View> */}
          <TouchableOpacity
            style={[
              styles.mediumButton,
              {alignSelf: 'center'},
              {backgroundColor: '#7DB0E5'},
              {width: 120},
              {marginTop: 40},
              {justifyContent: 'center'},
            ]}>
            <Text
              style={[
                styles.smallText,
                {fontSize: 22},
                {alignSelf: 'center'},
                {color: COLORS.white},
              ]}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default App;
