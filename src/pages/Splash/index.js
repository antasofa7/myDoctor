import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILLogo} from '../../assets';
import {colors, fonts, getData} from '../../utils';
import {FIREBASE} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    // getData('userData').then(res => {
    //   console.log('user => ', res);
    //   if (res) {
    //     navigation.replace('MainApp');
    //   } else {
    //     navigation.replace('GetStarted');
    //   }
    // });
    const _unsubscribe = FIREBASE.auth().onAuthStateChanged(isLogedIn => {
      setTimeout(() => {
        if (isLogedIn) {
          const user = FIREBASE.auth().currentUser;
          console.log('user => ', user);
          console.log('isLogedIn => ', isLogedIn);
          navigation.replace('MainApp');
        } else {
          console.log('isLogedIn => ', isLogedIn);
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return _ => _unsubscribe();
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: fonts.primary.semiBold,
    color: colors.secondary,
  },
});

export default Splash;
