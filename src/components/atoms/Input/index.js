import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({label, onChangeText, value, secureTextEntry, keyboardType}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.white1,
    backgroundColor: colors.gray3,
    borderRadius: 8,
    padding: 12,
    fontFamily: fonts.primary[400],
  },
  label: {fontSize: 16, fontFamily: fonts.primary[300], marginBottom: 6},
});
