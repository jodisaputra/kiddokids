import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={colors.orange1} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.loadingBackground,
    opacity: 0.5,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.orange1,
    marginTop: 16,
  },
});
