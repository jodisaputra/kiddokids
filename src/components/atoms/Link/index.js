import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const Link = ({title, onPress}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: {fontFamily: fonts.primary[400], fontSize: 13, color: colors.gray1},
});
