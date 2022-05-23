import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {ILBackground, ILLogo} from '../../assets';
import {Button, Spacer} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILBackground} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Spacer height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: fonts.primary.semiBold,
    color: colors.text.primary,
    fontSize: 28,
    lineHeight: 40,
    marginTop: 90,
  },
});
