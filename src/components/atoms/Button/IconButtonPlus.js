import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconPlus} from '../../../assets';

const IconButtonPlus = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconPlus />
    </TouchableOpacity>
  );
};

export default IconButtonPlus;
