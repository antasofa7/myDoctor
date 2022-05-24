import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.loadingBackground,
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    color: colors.primary,
    marginTop: 8,
  },
});
