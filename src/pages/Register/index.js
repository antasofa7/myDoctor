import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Header, Input, Spacer} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Spacer height={24} />
        <Input label="Pekerjaan" />
        <Spacer height={24} />
        <Input label="Email Address" />
        <Spacer height={24} />
        <Input label="Password" />
        <Spacer height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    backgroundColor: colors.white,
  },
});
