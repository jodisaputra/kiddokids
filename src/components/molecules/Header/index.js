import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

const Header = ({title, onPress, headertype}) => {
  const HeaderCustom = () => {
    if (headertype === 'no-icon') {
      return (
        <View style={styles.container(headertype)}>
          <Text style={styles.text(headertype)}>{title}</Text>
          <Gap width={24} />
        </View>
      );
    }
    return (
      <View style={styles.container(headertype)}>
        <Button type="icon-only" onPress={onPress} />
        <Text style={styles.text(headertype)}>{title}</Text>
        <Gap width={24} />
      </View>
    );
  };
  return <HeaderCustom />;
};

export default Header;

const styles = StyleSheet.create({
  container: (headertype) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: headertype === 'no-icon' ? colors.primary : colors.white1,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  text: (headertype) => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 18,
    color: headertype === 'no-icon' ? colors.white1 : colors.black1,
    fontFamily:
      headertype === 'no-icon' ? fonts.primary[300] : fonts.primary[400],
  }),
});
