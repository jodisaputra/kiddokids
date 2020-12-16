import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  IconHomeActive,
  IconHomeInactive,
  IconProfileActive,
  IconProfileInactive,
  IconRewardActive,
  IconRewardInactive,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHomeInactive />;
    }

    if (title === 'Reward') {
      return active ? <IconRewardActive /> : <IconRewardInactive />;
    }

    if (title === 'Profile') {
      return active ? <IconProfileActive /> : <IconProfileInactive />;
    }
    return <IconHomeInactive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
});
