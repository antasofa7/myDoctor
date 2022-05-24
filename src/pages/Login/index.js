import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {ILLogo} from '../../assets';
import {Button, Input, Link, Loading, Spacer} from '../../components';
import {colors, fonts, storeData, useForm} from '../../utils';
import {FIREBASE} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const login = _ => {
    setLoading(true);
    FIREBASE.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        console.log('success', res);
        const user = res.user;
        FIREBASE.database()
          .ref(`users/${user.uid}/`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              console.log('data user => ', resDB.val());
              storeData('userData', resDB.val());
              navigation.replace('MainApp');
            }
          });
        setLoading(false);
      })
      .catch(err => {
        const errorMessage = err.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
          duration: 3000,
          titleStyle: {fontFamily: fonts.primary.regular, fontSize: 14},
        });
        console.log('error => ', err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Address"
            keyboardType="email-address"
            value={form.email}
            onChangeText={email => setForm('email', email)}
          />
          <Spacer height={24} />
          <Input
            label="Password"
            secureTextEntry
            value={form.password}
            onChangeText={password => setForm('password', password)}
          />
          <Spacer height={10} />
          <Link title="Forgot my password" fontSize={12} />
          <Spacer height={40} />
          <Button
            title="Sign In"
            disabled={form.email && form.password ? false : true}
            onPress={login}
          />
          <Spacer height={30} />
          <Link
            title="Create New Account"
            fontSize={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary.regular,
    color: colors.text.primary,
    marginVertical: 40,
    maxWidth: 180,
  },
});
