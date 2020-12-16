import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Button, Header, HeaderProfile} from '../../components';
import {colors} from '../../utils';
import {getData} from '../../utils/localstorage';
import auth from '@react-native-firebase/auth';

const Profile = () => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    name: '',
  });

  useEffect(() => {
    getData('admin').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
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
        <Image source={profile.photo} style={styles.avatar} />
      </View>
      <View style={styles.page}>
        <Text>{profile.name}</Text>
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
});
