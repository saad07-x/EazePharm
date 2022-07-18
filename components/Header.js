import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/stylesheet';
export default function Header(props) {
  return (
    <View style={styles.headerView}>
      <View
        style={{
          width: '15%',
          alignSelf: 'flex-start',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-start',
            height: 80,
            width: 80,
            marginLeft: 20,
          }}></TouchableOpacity>
      </View>
      <View
        style={{
          width: '70%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.headerText}>{props.name}</Text>
      </View>
      <View style={{width: '15%', height: '100%', left: 0}}></View>

      {/* </GradientButton> */}
    </View>
  );
}
