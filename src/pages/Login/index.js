import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {colors, fonts, useForm} from '../../utils';
import {storeData} from '../../utils/localstorage';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const login = () => {
    setLoading(true);
    if (form.email === '' || form.password === '') {
      setLoading(false);
      showMessage({
        message: 'Please fill your email and password !!',
        type: 'default',
        backgroundColor: colors.errorMessage,
      });
    } else {
      auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(result => {
          setLoading(false);
          firestore()
            .doc(`user/${result.user.uid}`)
            .get()
            .then(documentSnapshot => {
              if (documentSnapshot) {
                storeData('user', documentSnapshot.data());
                navigation.replace('MainApp');
              }
            });
        })
        .catch(error => {
          setLoading(false);
          showMessage({
            message: error.message,
            type: 'default',
            backgroundColor: colors.errorMessage,
          });
        });
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <ILLogo />
        <Text style={styles.title}>Login Page</Text>
        <Gap height={35} />
        <Input
          label="Email"
          value={form.username}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry={true}
        />
        <Gap height={24} />
        <View style={styles.link}>
          <Link
            title="Create New Account"
            onPress={() => navigation.navigate('Register')}
          />
          <Link title="Forgot Password ?" />
        </View>
        <Gap height={30} />
        <View style={styles.button}>
          <Button title="Login" type="secondary" onPress={login} />
        </View>
      </ScrollView>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {padding: 40, backgroundColor: colors.white1, flex: 1},
  title: {
    fontFamily: fonts.primary[100],
    fontSize: 30,
    paddingTop: 50,
    color: colors.primary,
  },
  button: {alignItems: 'center'},
  link: {justifyContent: 'space-between', flex: 1, flexDirection: 'row'},
});
