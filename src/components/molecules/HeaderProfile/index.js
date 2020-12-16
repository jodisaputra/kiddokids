import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const HeaderProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.greeting}>Hello, </Text>
        <Text style={styles.name}>Jodi</Text>
      </View>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  name: {
    fontFamily: fonts.primary[100],
    fontSize: 24,
    color: colors.yellow1,
    textTransform: 'capitalize',
  },
  text: {flexDirection: 'row'},
});
