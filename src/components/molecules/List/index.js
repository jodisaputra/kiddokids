import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconClock, IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({onPress, onLongPress, point, title, avatar, time}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <View>
        <IconStar style={styles.icon} />
        <Text style={styles.poin}>{point}</Text>
      </View>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.time}>
        <View style={styles.clock}>
          <IconClock />
        </View>
        <View>
          <Text>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 165,
    backgroundColor: colors.white1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
  text: {
    marginTop: 18,
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.primary,
  },
  icon: {
    width: 36,
    height: 36,
    position: 'absolute',
    right: 35,
    top: -30,
  },
  clock: {marginRight: 2, alignContent: 'center'},
  time: {position: 'absolute', top: 150, right: 40, flexDirection: 'row'},
  poin: {
    position: 'absolute',
    right: 45,
    top: -21,
    fontFamily: fonts.primary[600],
    color: colors.primary,
  },
  avatar: {width: 50, height: 50},
});
