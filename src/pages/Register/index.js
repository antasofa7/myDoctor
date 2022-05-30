import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Loading, Spacer} from '../../components';
import {FIREBASE} from '../../config';
import {colors, showError, storeData} from '../../utils';

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const dataUser = {
    fullName: form.fullName,
    profession: form.profession,
    email: form.email,
  };

  const onContinue = _ => {
    setLoading(true);
    FIREBASE.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(res => {
        // Signed in
        // https://firebase.com/users/uid
        const user = res.user;
        dataUser.uid = user.uid;
        FIREBASE.database().ref(`users/${user.uid}/`).set(dataUser);
        console.log('register success:', res);

        storeData('userData', dataUser);

        setForm('');
        setLoading(false);
        navigation.navigate('UploadPhoto', {dataUser});
        // ...
      })
      .catch(err => {
        const errorMessage = err.message;
        showError(errorMessage);
        console.log('error register: ', errorMessage);
        setLoading(false);
        // ..
      });
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header title="Daftar Akun" />
          <View style={styles.content}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={fullName => setForm({...form, fullName})}
            />
            <Spacer height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={profession => setForm({...form, profession})}
            />
            <Spacer height={24} />
            <Input
              label="Email Address"
              value={form.email}
              keyboardType="email-address"
              onChangeText={email => setForm({...form, email})}
            />
            <Spacer height={24} />
            <Input
              label="Password"
              secureTextEntry
              value={form.password}
              onChangeText={password => setForm({...form, password})}
            />
            <Spacer height={40} />
            <Button
              title="Continue"
              disabled={
                form.fullName && form.profession && form.email && form.password
                  ? false
                  : true
              }
              onPress={onContinue}
            />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
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
