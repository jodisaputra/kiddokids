import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {getData} from '../../../utils/localstorage';

const HeaderProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
  });
  useEffect(() => {
    getData('user').then(res => {
      setProfile(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Image source={ILNullPhoto} style={styles.avatar} />
        <Text style={styles.greeting}>Hello, </Text>
        <Text style={styles.name}>{profile.name}</Text>
      </View>
      <View />
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 45,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  greeting: {
    fontFamily: fonts.primary[100],
    fontSize: 24,
    color: colors.white1,
    paddingTop: 15,
  },
  name: {
    fontFamily: fonts.primary[100],
    fontSize: 24,
    color: colors.yellow1,
    textTransform: 'capitalize',
    paddingTop: 15,
  },
  text: {flexDirection: 'row'},
});
