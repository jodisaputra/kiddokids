import auth from '@react-native-firebase/auth';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      auth().onAuthStateChanged(admin => {
        if (admin) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.text}>KidDo App</Text>
      <Text style={styles.subText}>For Kids</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    fontFamily: fonts.primary[400],
  },
  subText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    fontFamily: fonts.primary[400],
  },
});
