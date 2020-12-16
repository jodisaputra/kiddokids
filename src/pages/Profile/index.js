import auth from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto, IconStar} from '../../assets';
import {Button} from '../../components';
import {colors, fonts} from '../../utils';
import {getData} from '../../utils/localstorage';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      console.log(res);
      setProfile(res);
    });
  }, []);

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarBorder}>
        <Image source={ILNullPhoto} style={styles.avatar} />
      </View>
      <View style={styles.page}>
        <Text>{profile.name}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text>Your Points</Text>
        <View style={styles.poin}>
          <IconStar style={styles.icon} />
          <Text style={styles.total}>{profile.points}</Text>
        </View>
      </View>
      <Button title="logout" onPress={logout} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', paddingVertical: 40},
  page: {padding: 40},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  avatarBorder: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.gray2,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {flex: 1},
  text: {fontFamily: fonts.primary[600]},
  total: {fontFamily: fonts.primary[400]},
  icon: {width: 25, height: 25, marginRight: 3},
  poin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});
