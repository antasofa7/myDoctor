import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button, Input, Link, Spacer} from '../../components';
import {FIREBASE} from '../../config';
import {colors, fonts, showError, storeData, useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const login = _ => {
    dispatch({type: 'SET_LOADING', value: true});
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
        dispatch({type: 'SET_LOADING', value: false});
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        const errorMessage = err.message;
        showError(errorMessage);
        console.log('error => ', err.message);
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
