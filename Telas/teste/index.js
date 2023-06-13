import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import Checkbox from 'expo-checkbox';


const App = () => {
  const [isChecked, setChecked] = useState(false);

  return (

    <LinearGradient
    style={{flex: 1}}
    colors={['#9FB9FC', '#9FB9FC', '#9FB9FC']}>
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />

        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isChecked ? '👍' : '👎'}</Text>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default App;