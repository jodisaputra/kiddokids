import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconBack} from '../../../assets';

const IconOnly = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconBack />
    </TouchableOpacity>
  );
};

export default IconOnly;
