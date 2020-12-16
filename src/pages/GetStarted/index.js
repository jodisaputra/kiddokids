import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>to</Text>
        <Text style={styles.appname}>KidDo App For Kids</Text>
      </View>
      <View style={styles.button}>
        <Button title="Sign In" onPress={() => navigation.replace('Login')} />
        <Gap height={16} />
        <Button
          title="Sign Up"
          type="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 40,
    marginTop: 30,
    fontFamily: fonts.primary[100],
    color: colors.primary,
  },
  subtitle: {
    fontSize: 38,
    fontFamily: fonts.primary[100],
    color: colors.black2,
  },
  appname: {fontSize: 25, marginTop: 6, fontFamily: fonts.primary[500]},
  button: {alignItems: 'center'},
});
