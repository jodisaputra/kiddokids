import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, useForm} from '../../utils';
import {storeData} from '../../utils/localstorage';

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useForm({
    name: '',
    parent_email: '',
    email: '',
    password: '',
  });

  const submitForm = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);
        // reset form setelah daftar
        setForm('reset');
        const data = {
          name: form.name,
          email: form.email,
          parent_email: form.parent_email,
          uid: success.user.uid,
        };
        firestore()
          .collection('user')
          .doc(success.user.uid)
          .set(data);
        // simpan ke local storage
        storeData('user', data);
        navigation.navigate('Login');
      })
      .catch(error => {
        setLoading(false);
        var errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.errorMessage,
        });
        console.log('error register', errorMessage);
      });
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Header onPress={() => navigation.goBack()} title="Register" />
        <View style={styles.page}>
          <View style={styles.content}>
            <Input
              label="Name"
              value={form.name}
              onChangeText={value => setForm('name', value)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Parent Email"
              value={form.parent_email}
              onChangeText={value => setForm('parent_email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              secureTextEntry
              value={form.password}
              onChangeText={value => setForm('password', value)}
            />
          </View>
          <Gap height={20} />
          <View style={styles.button}>
            <Button title="Sign Up" onPress={submitForm} />
          </View>
        </View>
      </ScrollView>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white1, flex: 1},
  page: {paddingVertical: 20},
  content: {padding: 40, paddingTop: 0},
  button: {alignItems: 'center'},
});
