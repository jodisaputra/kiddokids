import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconNext, IconStar, ILReward} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListReward = ({title, total, onPress}) => {
  return (
    <View style={styles.page}>
      <Image source={ILReward} style={styles.avatar} />
      <View style={styles.wrapper}>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.poin}>
          <IconStar style={styles.icon} />
          <Text style={styles.total}>{total}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress}>
        <IconNext style={styles.next} />
      </TouchableOpacity>
    </View>
  );
};

export default ListReward;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white1,
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {flex: 1},
  avatar: {height: 50, width: 50, marginRight: 20},
  text: {fontFamily: fonts.primary[600]},
  total: {fontFamily: fonts.primary[400]},
  icon: {width: 18, height: 18, marginRight: 3},
  poin: {flexDirection: 'row'},
});
