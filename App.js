/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Sttsbr from './Components/sttsbr/stts';
import ActIndctr from './Components/activityIndict/ActIndct';
import Swtch from './Components/switch/swtch';
const App = () => {

  return (
    <View style={styles.header}>
      {/* <Sttsbr /> */}
      {/* <ActIndctr /> */}
      <Swtch />
    </View>
    
  );
};

const styles = StyleSheet.create({
  header:{
    flex:1,
  },
  al:
  {
    textAlign:'center',
    backgroundColor:'red'
  }
});

export default App;
