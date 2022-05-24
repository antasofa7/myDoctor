import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Button, Header, Input, Loading, Spacer} from '../../components';
import {colors, fonts, getData, storeData} from '../../utils';
import {FIREBASE} from '../../config';
import {showMessage} from 'react-native-flash-message';

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
    emai: form.email,
  };

  const onContinue = _ => {
    setLoading(true);
    FIREBASE.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(userCredential => {
        // Signed in
        // https://firebase.com/users/uid
        const user = userCredential.user;
        dataUser.uid = user.uid;
        FIREBASE.database().ref(`users/${user.uid}/`).set(dataUser);
        console.log('register success:', userCredential);

        storeData('userData', dataUser);

        setForm('');
        setLoading(false);
        navigation.navigate('UploadPhoto', {dataUser});
        // ...
      })
      .catch(error => {
        // var errorCode = error.code;
        var errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
          duration: 3000,
          titleStyle: {fontFamily: fonts.primary.regular, fontSize: 14},
        });
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
              onPress={
                onContinue
                // () => navigation.navigate('UploadPhoto')
              }
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
