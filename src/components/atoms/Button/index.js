import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import IconButtonPlus from './IconButtonPlus';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';
import ButtonModal from './ButtonModal';

const Button = ({type, title, onPress}) => {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} />;
  }

  if (type === 'icon-plus') {
    return <IconButtonPlus onPress={onPress} />;
  }

  if (type === 'btn-modal') {
    return <ButtonModal onPress={onPress} title={title} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? colors.secondary : colors.primary,
    paddingVertical: 10,
    borderRadius: 20,
    height: 70,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  }),
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white1,
    textAlign: 'center',
    fontFamily: fonts.primary[400],
  },
});
