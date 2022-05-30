import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input} from '../../atoms';

const InputChat = props => {
  const {doctor, value, onChangeText, onPress} = props;

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        type="chat"
        doctor={doctor}
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        type="btn-icon-send"
        disabled={value === '' ? true : false}
        onPress={onPress}
      />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 26,
  },
  input: {
    flex: 1,
  },
});
