import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Button, Input, Link, Spacer} from '../../components';
import {colors, fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Spacer height={24} />
      <Input label="Password" />
      <Spacer height={10} />
      <Link title="Forgot my password" fontSize={12} />
      <Spacer height={40} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Spacer height={30} />
      <Link
        title="Create New Account"
        fontSize={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
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
